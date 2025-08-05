import { expect, test } from './fixtures/login';

test.describe('Login Page', () => {
  test('has heading', async ({ loginPage }) => {
    await expect(loginPage.pageHeading).toContainText('Minimal');
  });

  test('authorization', async ({ loginPage }) => {
    await loginPage.emailInput.pressSequentially('somemail@email.com');
    await loginPage.passwordInput.pressSequentially('password');
    await expect(loginPage.submitButton).not.toBeDisabled();
    await loginPage.submitButton.click();
    await expect(loginPage.username).toContainText('John Doe');
  });
});
