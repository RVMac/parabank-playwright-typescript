import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class ParaBankAccountOverViewPage {
  private page: Page;
  private accountOverviewHeader: Locator;
  private accountTable: Locator;

  constructor(page: Page) {
    this.page = page;

    //#region Locators
    this.accountOverviewHeader = page.getByRole('heading', { name: 'Accounts Overview' });
    this.accountTable = page.locator("//table[@id='accountTable']");
  }

  async verifyAccountOverviewPage() {
    await expect(this.page).toHaveTitle("ParaBank | Accounts Overview");
    await expect(this.accountOverviewHeader).toBeVisible();
  }
}