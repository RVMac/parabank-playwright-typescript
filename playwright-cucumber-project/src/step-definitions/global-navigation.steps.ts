import { When } from "@cucumber/cucumber";
import { GlobalNavigationPage } from "../pages/GlobalNavigationPage";

let globalNavPage: GlobalNavigationPage;

// #region WHEN STEPS
When('I click the Home Page global navigation link', async function () {
  globalNavPage = new GlobalNavigationPage(this.page);
  await globalNavPage.clickGlobalHomeNavLink();
});

When('I click on the Accounts Overview navigation link', async function () {
  await globalNavPage.clickAccountsOverviewLink();
});

When('I click the Transfer Funds navigation link', async function () {
  await globalNavPage.clickTransferFundsLink();
});

// #region WHEN STEPS