import { Then, When } from "@cucumber/cucumber";
import { ParaBankHomePage } from "../pages/CustomerCreationPage";
import { ParaBankAccountOverViewPage } from "../pages/AccountOverViewPage";

let homepage: ParaBankHomePage;
let accountsOverviewPage: ParaBankAccountOverViewPage;

// #region WHEN STEPS
When('I proceed to logout', async function () {
  homepage = new ParaBankHomePage(this.page);
  await homepage.clickLogoutLink();
});
// #endregion WHEN STEPS


// #region THEN STEPS
Then('I should see the Accounts Overview page' , async function () {
  accountsOverviewPage = new ParaBankAccountOverViewPage(this.page);
  await accountsOverviewPage.verifyAccountOverviewPage();
});
// #endregion THEN STEPS