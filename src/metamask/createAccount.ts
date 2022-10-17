import { Page } from 'puppeteer';

import { clickOnElement, openProfileDropdown, clickOnButton } from '../helpers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createAccount = (page: Page, version?: string) => async (): Promise<void> => {
  await page.bringToFront();
  await openProfileDropdown(page);

  // TODO: use different approach? maybe change param to account name
  //'Create Account' -> 'Create account' in newer metamask
  await clickOnElement(page, 'Create Account');
  await clickOnButton(page, 'Create');
};
