import { test as base } from '@playwright/test';
import { MainPage } from '../pages/main';

export const test = base.extend<{ mainPage: MainPage }>({
  mainPage: async ({ page }, use) => {
    const mainPage: MainPage = new MainPage(page);
    await mainPage.goto();
    await use(mainPage);
  },
});

export { expect } from '@playwright/test';
