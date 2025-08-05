import { test as base } from '@playwright/test';
import { SettingsPage } from '../pages/settings';

export const test = base.extend<{ settingsPage: SettingsPage }>({
  settingsPage: async ({ page }, use) => {
    const settingsPage: SettingsPage = new SettingsPage(page);
    await settingsPage.goto();
    await use(settingsPage);
  },
});

export { expect } from '@playwright/test';
