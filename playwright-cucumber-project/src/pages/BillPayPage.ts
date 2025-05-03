import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class BillPayPage {
  private page: Page;

  // #region Locators
  private nameTextbox: Locator;
  private addressTextbox: Locator;
  private cityTextbox: Locator;
  private stateTextbox: Locator;
  private zipCodeTextbox: Locator;
  private phoneNumberTextbox: Locator;

  private payeeToAccountNoTextbox: Locator;
  private verifyAccountNoTextbox: Locator;

  private amountTextbox: Locator;
  private fromAccountNoSelector: Locator;
  private sendPaymentButton: Locator;

  private billPaySuccessMessageHeader: Locator;
  private spanPayeeName: Locator;
  private spanAmountPaid: Locator;
  private spanFromAccountId: Locator;

  // #endregion Locators
  constructor(page: Page) {
    this.page = page;

    // #region Locators
    this.nameTextbox = page.locator('input[name="payee\\.name"]');
    this.addressTextbox = page.locator('input[name="payee\\.address\\.street"]');
    this.cityTextbox = page.locator('input[name="payee\\.address\\.city"]');
    this.stateTextbox = page.locator('input[name="payee\\.address\\.state"]');
    this.zipCodeTextbox = page.locator('input[name="payee\\.address\\.zipCode"]');
    this.phoneNumberTextbox = page.locator('input[name="payee\\.phoneNumber"]');
    this.payeeToAccountNoTextbox = page.locator('input[name="payee\\.accountNumber"]');
    this.verifyAccountNoTextbox = page.locator('input[name="verifyAccount"]');
    this.amountTextbox = page.locator('input[name="amount"]');
    this.fromAccountNoSelector = page.locator('select');
    this.sendPaymentButton = page.getByRole('button', { name: 'Send Payment' });

    this.billPaySuccessMessageHeader = page.getByRole('heading', { name: 'Bill Payment Complete' });
    this.spanPayeeName = page.locator('span#payeeName');
    this.spanAmountPaid = page.locator('span#amount');
    this.spanFromAccountId = page.locator('span#fromAccountId');
    // #endregion Locators
  }

  async fillBillPayForm(
    name: string,
    address: string,
    city: string,
    state: string,
    zipCode: string,
    phoneNumber: string,
    payeeToAccountNo: string,
    amount: string,
    fromAccountNo: number){
    await this.nameTextbox.fill(name);
    await this.addressTextbox.fill(address);
    await this.cityTextbox.fill(city);
    await this.stateTextbox.fill(state);
    await this.zipCodeTextbox.fill(zipCode);
    await this.phoneNumberTextbox.fill(phoneNumber);
    await this.payeeToAccountNoTextbox.fill(payeeToAccountNo);
    await this.verifyAccountNoTextbox.fill(payeeToAccountNo);
    await this.amountTextbox.fill(amount);
    await this.fromAccountNoSelector.selectOption({ label: fromAccountNo.toString() });
    }

    async clickSendPaymentButton() {
      await this.sendPaymentButton.click();
    }

    async verifyBillPaySuccessMessage(payeeName: string, amount: string, fromAccountNo: number) {
      await this.billPaySuccessMessageHeader.isVisible();
      await expect(this.spanPayeeName).toContainText(payeeName);
      await expect(this.spanAmountPaid).toContainText(`$${amount}`);
      await expect(this.spanFromAccountId).toContainText(fromAccountNo.toString());
    }

}