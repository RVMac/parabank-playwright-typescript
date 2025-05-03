import { Locator, Page } from "playwright";

export class GlobalNavigationPage {
  private page: Page;
  
  // #region Locators
  private homeNavLink: Locator;
  private openNewAccountLink: Locator;
  private accountsOverviewLink: Locator;
  private transferFundsLink: Locator;
  // #endregion Locators

  constructor(page: Page) {
    this.page = page;

    // #region Locators
    this.homeNavLink = page.getByRole('link', { name: 'home', exact: true });
    this.openNewAccountLink = page.getByRole('link', { name: 'Open New Account' });
    this.accountsOverviewLink = page.getByRole('link', { name: 'Accounts Overview' });
    this.transferFundsLink = page.getByRole('link', { name: 'Transfer Funds' });
    // #region Locators
  }

  async clickGlobalHomeNavLink() {
    await this.homeNavLink.click();
  }

  async clickOpenNewAccountLink() {
    await this.openNewAccountLink.click();
  };

  async clickAccountsOverviewLink() {
    await this.accountsOverviewLink.click();
  };

  async clickTransferFundsLink() {
    await this.transferFundsLink.click();
  }
}