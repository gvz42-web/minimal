import { expect, test } from './fixtures/main';

test.describe('Main Page', () => {
  test('has heading', async ({ mainPage }) => {
    await expect(mainPage.pageHeading).toContainText('Minimal');
  });
});
