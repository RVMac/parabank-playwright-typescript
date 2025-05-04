import { Given, Then, When } from "@cucumber/cucumber";
import { ParaBankLoginPage } from "../../pages/LoginPage";
let loginPage: ParaBankLoginPage;

// #region GIVEN STEPS
Given('I am on the ParaBank login page', async function () {
  loginPage = new ParaBankLoginPage(this.page);
  await loginPage.navigate();
});
// #endregion GIVEN STEPS

// #region WHEN STEPS
When('I login using credentials of the created account', async function () {
  let createUsername: string = this.scenarioContext.get('createUsername');
  let createPassword: string = this.scenarioContext.get('createPassword');

  await loginPage.login(createUsername, createPassword);
});
// #endregion WHEN STEPS

// #region THEN STEPS
Then('I should see the Login Page of ParaBank', async function () {
  await loginPage.verifyLoginPage();
});
// #endregion THEN STEPS