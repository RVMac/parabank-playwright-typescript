import { Then, When } from "@cucumber/cucumber";
import { TransferFundsPage } from "../pages/TransferFundsPage";

let transferFundsPage: TransferFundsPage;

// #region WHEN STEPS
When('I transfer {string} from the new account to the existing account', async function (amount: string) {
  transferFundsPage = new TransferFundsPage(this.page);
  
  amount = amount.replace(/[^0-9.]/g, '');
  this.scenarioContext.set('amount', amount);

  let newAccountNumber : number = this.scenarioContext.get('accountNumber');

  await transferFundsPage.transferFunds(amount, newAccountNumber);
});
// #endregion WHEN STEPS


// #region THEN STEPS
Then('I should see success message for fund transfer', async function () {
  let amount: string = this.scenarioContext.get('amount');
  let newAccountNumber : string = this.scenarioContext.get('accountNumber').toString();
  await transferFundsPage.verifySuccessFundTransferMessage(amount, newAccountNumber);
});
// #endregion THEN STEPS