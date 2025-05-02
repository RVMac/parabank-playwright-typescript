import { Then, When } from "@cucumber/cucumber";
import { CustomerCreationPage } from "../pages/CustomerCreationPage";
import { ParaBankAccountOverViewPage } from "../pages/AccountOverViewPage";
import { GlobalNavigationPage } from "../pages/GlobalNavigationPage";

let homepage: CustomerCreationPage;
let accountsOverviewPage: ParaBankAccountOverViewPage;
let globalNavPage: GlobalNavigationPage;

// #region WHEN STEPS
When('I proceed to logout', async function () {
  homepage = new CustomerCreationPage(this.page);
  await homepage.clickLogoutLink();
});

When('I click the Home Page global navigation link', async function () {
  globalNavPage = new GlobalNavigationPage(this.page);
  await globalNavPage.clickGlobalHomeNavLink();
});

When('I click on the Accounts Overview navigation link', async function () {
  await globalNavPage.clickAccountsOverviewLink();
});
// #endregion WHEN STEPS


// #region THEN STEPS
Then('I should see the Accounts Overview page' , async function () {
  accountsOverviewPage = new ParaBankAccountOverViewPage(this.page);
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