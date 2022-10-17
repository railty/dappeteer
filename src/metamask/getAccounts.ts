import { Page } from 'puppeteer';

import { clickOnElement, openProfileDropdown, clickOnLogo } from '../helpers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getAccounts = (page: Page, version?: string) => async (): Promise<any> => {
  await page.bringToFront();
  await openProfileDropdown(page);

  await page.waitForTimeout(1000);
  
  const accounts = await page.evaluate(()=>{
    const divs = Array.from(document.querySelectorAll("div.account-menu__accounts div.account-menu__account"));
    const accounts = divs.map((div)=>{
      const name = div.querySelector("div.account-menu__name").textContent;
      const value = div.querySelector("span.currency-display-component__text").textContent;
      const suffix = div.querySelector("span.currency-display-component__suffix").textContent;
      const prefix = div.querySelector("span.currency-display-component__prefix").textContent;
      return {
        name,
        value,
        suffix,
        prefix
      }
    });
    return accounts;
  });
  await clickOnLogo(page);
  return accounts;
};
