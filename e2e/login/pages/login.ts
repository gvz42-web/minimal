import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly pageHeading: Locator;
  readonly username: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(private readonly page: Page) {
    this.pageHeading = this.page.getByTestId('page-heading');
    this.username = this.page.getByTestId('username');
    this.emailInput = this.page.getByTestId('email').locator('input');
    this.passwordInput = this.page.getByTestId('password').locator('input');
    this.submitButton = this.page.getByTestId('submit');
  }

  async goto() {
    await this.page.goto('/login');
  }
}
