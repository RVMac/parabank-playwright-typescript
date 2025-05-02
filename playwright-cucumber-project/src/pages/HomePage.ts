import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class HomePage{
    private page: Page;

    private homepageOptions: Locator;
    private latestNews: Locator;

    constructor(page: Page) {
        this.page = page;

        // #region Locators
        this.homepageOptions = page.getByText('ATM Services Withdraw Funds Transfer Funds Check Balances Make Deposits Online');
        this.latestNews = page.getByRole('heading', { name: 'Latest News' });
        // #endregion Locators
    }
    async verifyHomePage(){
      await expect(this.page).toHaveTitle("ParaBank | Welcome | Online Banking");
      await expect(this.homepageOptions).toBeVisible();
      await expect(this.latestNews).toBeVisible();
    }
}