import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class OpenNewAccountPage {
  private page: Page;
  
  // #region Locators
  private accountTypeOption: Locator;
  private openNewAccountButton: Locator;
  private newAccountNumber: Locator;
  private accountCreationSuccessMessageHeader: Locator;
  private accountCreationSuccessMessageBody: Locator;
  // #endregion Locators

  constructor(page: Page) {
    this.page = page;

    // #region Locators
    this.accountTypeOption = page.locator("select#type");
    this.openNewAccountButton = page.getByRole('button', { name: 'Open New Account' });
    this.newAccountNumber = page.locator("a#newAccountId");
    this.accountCreationSuccessMessageHeader = page.getByRole('heading', { name: 'Account Opened!' });
    this.accountCreationSuccessMessageBody = page.getByText('Congratulations, your account');
    // #endregion Locators
  }

  async createAccountType(accountType: string) {
    await this.accountTypeOption.selectOption({ label: accountType.toUpperCase() });
    await this.page.waitForTimeout(2000); // Wait for 2 seconds to allow the new account number to be generated

    await this.openNewAccountButton.click();
    await this.page.waitForTimeout(2000); // Wait for 2 seconds to allow the new account number to be generated
  }

  async getAccountNumber(){
    return Number(await this.newAccountNumber.innerText());;
  }

  async verifyNewAccountCreationSuccess() {
    await expect(this.accountCreationSuccessMessageHeader).toBeVisible();
    await expect(this.accountCreationSuccessMessageBody).toBeVisible();
  }
}