import { Then, When } from "@cucumber/cucumber";
import { BillPayPage } from "../../pages/BillPayPage";

let billPayPage: BillPayPage;

// #region WHEN STEPS
When('I do a bill payment using the new account with the following details:', async function (dataTable) {
  billPayPage = new BillPayPage(this.page);

  const data = dataTable.rowsHash() as { [key: string]: string };

  let payeeName: string = data['Payee Name'];
  this.scenarioContext.set('payeeName', payeeName);

  let payeeAddress: string = data['Address'];
  let payeeCity: string = data['City'];
  let payeeState: string = data['State'];
  let payeeZipCode: string = data['Zip Code'];
  let payeePhone: string = data['Phone'];
  let payeeToAccount: string = data['Payee To Account'];

  let amount: string = data['Amount'].toString().replace(/[^0-9.]/g, '');
  this.scenarioContext.set('paidBillAmount', amount);

  let newAccountNumber: number = this.scenarioContext.get('accountNumber');
  if (newAccountNumber === null) {
    throw new Error("Account number is null");
  }
  await billPayPage.fillBillPayForm(
    payeeName,
    payeeAddress,
    payeeCity,
    payeeState,
    payeeZipCode,
    payeePhone,
    payeeToAccount,
    amount,
    newAccountNumber
  );

  await billPayPage.clickSendPaymentButton();
});

// #endregion WHEN STEPS


// #region THEN STEPS
Then('I should see success message for bill payment', async function () {
  let payeeName: string = this.scenarioContext.get('payeeName');
  let amount: string = this.scenarioContext.get('paidBillAmount');
  let newAccountNumber: number = this.scenarioContext.get('accountNumber');
  await billPayPage.verifyBillPaySuccessMessage(payeeName, amount, newAccountNumber);
});