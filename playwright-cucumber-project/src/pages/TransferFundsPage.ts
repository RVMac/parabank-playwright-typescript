import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class TransferFundsPage {
  private page: Page;

  // #region Locators
  private amountNumbox: Locator;
  private toAccountDropdown: Locator;
  private proceedTransferButton: Locator;

  private successMessageHeader: Locator;
  private spanAmountResult: Locator;
  private spanToAccountIdResult: Locator;
  // #endregion Locators

  constructor(page: Page) {
    this.page = page;

    // #region Locators
    this.amountNumbox = page.locator('input#amount');
    this.toAccountDropdown = page.locator('#toAccountId');
    this.proceedTransferButton = page.getByRole('button', { name: 'Transfer' });

    this.successMessageHeader = page.getByRole('heading', { name: 'Transfer Complete!' });
    
    this.spanAmountResult = page.locator('span#amountResult');
    this.spanToAccountIdResult = page.locator('span#toAccountIdResult');
    // #endregion Locators
  } 

  async transferFunds(amount: string, toAcctNo: number) {
    await this.amountNumbox.fill(amount);
    await this.toAccountDropdown.selectOption({ label: toAcctNo.toString() });
    await this.proceedTransferButton.click();
  }

  async verifySuccessFundTransferMessage(amount: string, toAcctNo: string) {
    await expect(this.successMessageHeader).toBeVisible();
    await expect(this.spanAmountResult).toHaveText(`$${amount}`);
    await expect(this.spanToAccountIdResult).toHaveText(toAcctNo);
  }

}