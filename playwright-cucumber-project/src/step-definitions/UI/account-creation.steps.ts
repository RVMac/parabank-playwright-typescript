import { Given, Then, When } from "@cucumber/cucumber";
import { ParaBankLoginPage } from "../../pages/LoginPage";
import { faker } from '@faker-js/faker';
import { CustomerCreationPage } from "../../pages/CustomerCreationPage";

let loginPage: ParaBankLoginPage;
let homepage: CustomerCreationPage;

let registrationData: { [key: string]: string } = {};


// #region WHEN STEPS
When('I click on the Register link', async function () {
  loginPage = new ParaBankLoginPage(this.page);
  await loginPage.clickRegisterLink();
});

When('I register the following user details:', async function (dataTable) {
  const data = dataTable.rowsHash() as { [key: string]: string };
  
  for (const [field, value] of Object.entries(data)) {
    if (typeof value === 'string' && value.includes('{random}')) {
      registrationData[field] = value.replace('{random}', faker.string.alphanumeric(8));
    } else {
      registrationData[field] = value;
    }
  }

  let firstName: string = registrationData['First Name'];
  let lastName: string = registrationData['Last Name'];
  let addressStreet: string = registrationData['Address'];
  let addressCity: string = registrationData['City'];
  let addressState: string = registrationData['State'];
  let addressZipCode: string = registrationData['Zip Code'];
  let phoneNumber: string = registrationData['Phone'];
  let ssn: string = registrationData['SSN'];
  
  let createUsername: string = registrationData['Username'];
  this.scenarioContext.set('createUsername', createUsername);
  
  let createPassword: string = registrationData['Password'];
  this.scenarioContext.set('createPassword', createPassword);

  await loginPage.fillRequiredFields(
    firstName,
    lastName,
    addressStreet,
    addressCity,
    addressState,
    addressZipCode,
    phoneNumber,
    ssn,
    createUsername,
    createPassword
  );

  await loginPage.proceedToRegister();
});
// #endregion WHEN STEPS


//#region THEN STEPS
Then('I should see the account sign up sheet', async function () {
  await loginPage.verifyAccountSignupSheet();
});

Then('customer creation should be successful', async function () {
  homepage = new CustomerCreationPage(this.page);
  let createUsername: string = this.scenarioContext.get('createUsername');
  await homepage.verifyCustomerCreationSuccess(createUsername);
});
//#endregion THEN STEPS