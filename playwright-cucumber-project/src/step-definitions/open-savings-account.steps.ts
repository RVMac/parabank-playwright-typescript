import { Then, When } from "@cucumber/cucumber";
import { GlobalNavigationPage } from "../pages/GlobalNavigationPage";
import { OpenNewAccountPage } from "../pages/OpenNewAccountPage";

let globalNavPage: GlobalNavigationPage;
let openNewAccountPage: OpenNewAccountPage;

// #region WHEN STEPS
When('I open a new {string} account', async function (type: string) {
  globalNavPage = new GlobalNavigationPage(this.page);
  await globalNavPage.clickOpenNewAccountLink();

  openNewAccountPage = new OpenNewAccountPage(this.page);
  await openNewAccountPage.createAccountType(type);

  let accountNumber: number | null = await openNewAccountPage.getAccountNumber();
  if (accountNumber === null) {
    throw new Error("Account number is null");
  }

  this.scenarioContext.set('accountNumber', accountNumber);
});
// #endregion WHEN STEPS


// #region THEN STEPS
Then('I should see success message for new account creation', async function () {
  await openNewAccountPage.verifyNewAccountCreationSuccess();
});
// #endregion THEN STEPS