import { Locator, Page } from '@playwright/test';
import { SelectionDialog } from '../../shared/selection-dialog/selection-dialog';

export class SettingsPage {
  readonly pageHeading: Locator;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;
  readonly language: Locator;
  readonly theme: Locator;
  readonly back: Locator;
  readonly html: Locator;
  readonly dialog: SelectionDialog;

  constructor(private readonly page: Page) {
    this.pageHeading = this.page.getByTestId('page-heading');
    this.saveButton = this.page.getByTestId('save-button');
    this.cancelButton = this.page.getByTestId('cancel-button');
    this.language = this.page.getByTestId('settings-language');
    this.theme = this.page.getByTestId('settings-theme');
    this.back = this.page.getByTestId('settings-back');
    this.dialog = new SelectionDialog(
      this.page.locator('mat-dialog-container')
    );
    this.html = this.page.locator('html');
  }

  async goto() {
    await this.page.goto('/settings');
  }

  async chooseOption(language: string) {
    await this.dialog.chooseOption(language);
    await this.dialog.save();
  }
}
