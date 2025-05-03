import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class CustomerCreationPage {
  private page: Page;
  
  // #region Locators
  private successMessageBody: Locator;
  private logoutButton: Locator;
  // #endregion Locators
  
  constructor(page: Page) {
    this.page = page;

    // #region Locators
    this.successMessageBody = page.getByText('Your account was created successfully. You are now logged in.');
    this.logoutButton = page.getByRole('link', { name: 'Log Out' });
    // #endregion Locators
  }

  async verifyCustomerCreationSuccess(username: string) {
    await expect(this.page).toHaveTitle("ParaBank | Customer Created");
    await expect(this.successMessageBody).toBeVisible();

    let welcomeUserHeader: Locator = this.page.getByRole('heading', { name: `Welcome ${username}` });
    await expect(welcomeUserHeader).toBeVisible();
  }

  async clickLogoutLink() {
    let logoutLink: Locator = this.page.getByRole('link', { name: 'Log Out' });
    await logoutLink.click();
  }
}