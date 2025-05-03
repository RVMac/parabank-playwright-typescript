import { Then, When } from "@cucumber/cucumber";
import { CustomerCreationPage } from "../pages/CustomerCreationPage";
import { AccountOverViewPage } from "../pages/AccountOverViewPage";
import { GlobalNavigationPage } from "../pages/GlobalNavigationPage";

let homepage: CustomerCreationPage;
let accountsOverviewPage: AccountOverViewPage;

// #region WHEN STEPS
When('I proceed to logout', async function () {
  homepage = new CustomerCreationPage(this.page);
  await homepage.clickLogoutLink();
});
// #endregion WHEN STEPS


// #region THEN STEPS
Then('I should see the Accounts Overview page' , async function () {
  accountsOverviewPage = new AccountOverViewPage(this.page);
  await accountsOverviewPage.verifyAccountOverviewPage();
});

Then('I can see the new account has {string} balance', async function (accountBalance: string) {
  let accountNumber: number | null = this.scenarioContext.get('accountNumber');
  if (accountNumber === null) {
    throw new Error("Account number is null");
  }
  await accountsOverviewPage.verifyAccountBalance(accountNumber, accountBalance);
});
// #endregion THEN STEPS