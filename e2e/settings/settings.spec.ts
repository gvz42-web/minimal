import { expect, test } from './fixtures/settings';

test.describe('Settings Page', () => {
  test('change language', async ({ settingsPage }) => {
    await settingsPage.language.click();
    await settingsPage.chooseOption('ru');
    await expect(settingsPage.pageHeading).toHaveText('Минимал');
  });

  test('change theme', async ({ settingsPage }) => {
    await settingsPage.theme.click();
    await settingsPage.chooseOption('light');
    await expect(settingsPage.html).toHaveClass('theme-light');
  });
});
