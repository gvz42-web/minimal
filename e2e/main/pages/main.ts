import type { Locator, Page } from '@playwright/test';

export class MainPage {
  readonly pageHeading: Locator;

  constructor(private readonly page: Page) {
    this.pageHeading = this.page.getByTestId('page-heading');
  }

  async goto() {
    await this.page.goto('/');
  }
}
