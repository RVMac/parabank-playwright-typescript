import { Then } from "@cucumber/cucumber";
import { HomePage } from "../../pages/HomePage";

let homepage : HomePage;

// #region THEN STEPS
Then('I should see the ParaBank home page', async function () {
  homepage = new HomePage(this.page);
  await homepage.verifyHomePage();
});
// #endregion THEN STEPS