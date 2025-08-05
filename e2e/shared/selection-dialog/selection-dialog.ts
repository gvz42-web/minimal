import { Locator } from '@playwright/test';

export class SelectionDialog {
  readonly saveButton: Locator;
  readonly cancelButton: Locator;

  constructor(private readonly dialog: Locator) {
    this.saveButton = this.dialog.getByTestId('save-button');
    this.cancelButton = this.dialog.getByTestId('cancel-button');
  }

  async chooseOption(optionValue: string) {
    await this.dialog.getByTestId(optionValue).click();
  }

  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }
}
