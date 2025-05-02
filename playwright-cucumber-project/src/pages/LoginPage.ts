import { expect, Locator, Page } from "@playwright/test";

export class ParaBankLoginPage {
  private page: Page;

  //#region Locators
  private customerLoginHeader: Locator;
  private registerLink: Locator;
  private usernameTextbox: Locator;
  private passwordTextbox: Locator;
  private loginButton: Locator;

  private accountSignupSheetHeader: Locator;
  private firstNameTextbox: Locator;
  private lastNameTextbox: Locator;
  private addressStreetTextbox: Locator;
  private addressCityTextbox: Locator;
  private addressStateTextbox: Locator;
  private addressZipCodeTextbox: Locator;
  private phoneNumberTextbox: Locator;
  private ssnTextbox: Locator;
  private createUsernameTextbox: Locator;
  private createPasswordTextbox: Locator;
  private repeatedPasswordTextbox: Locator;
  private registerButton: Locator;

  //#endregion Locators

  constructor(page: Page) {
    this.page = page;

    //#region Locators
    this.customerLoginHeader = page.getByRole('heading', { name: 'Customer Login' });
    this.registerLink = page.getByRole("link", { name: "Register" });
    this.usernameTextbox = page.locator('input[name="username"]');
    this.passwordTextbox = page.locator('input[name="password"]');
    this.loginButton = page.getByRole('button', { name: 'Log In' });
    
    this.accountSignupSheetHeader = page.getByRole('heading', { name: 'Signing up is easy!' });
    this.firstNameTextbox = page.locator('[id="customer\\.firstName"]');
    this.lastNameTextbox = page.locator('[id="customer\\.lastName"]');
    this.addressStreetTextbox = page.locator('[id="customer\\.address\\.street"]');
    this.addressCityTextbox = page.locator('[id="customer\\.address\\.city"]');
    this.addressStateTextbox = page.locator('[id="customer\\.address\\.state"]');
    this.addressZipCodeTextbox = page.locator('[id="customer\\.address\\.zipCode"]');
    this.phoneNumberTextbox = page.locator('[id="customer\\.phoneNumber"]');
    this.ssnTextbox = page.locator('[id="customer\\.ssn"]');
    this.createUsernameTextbox = page.locator('[id="customer\\.username"]');
    this.createPasswordTextbox = page.locator('[id="customer\\.password"]');
    this.repeatedPasswordTextbox = page.locator('#repeatedPassword');
    this.registerButton = page.getByRole('button', { name: 'Register' });
    //#endregion Locators

  }

  async navigate() {
    await this.page.goto("https://parabank.parasoft.com/");
  }

  async login(username: string, password: string) {
    await this.usernameTextbox.fill(username);
    await this.passwordTextbox.fill(password);
    await this.loginButton.click();
  }

  async clickRegisterLink() {
    await this.registerLink.click();
  }
  
  async verifyAccountSignupSheet() {
    await expect(this.accountSignupSheetHeader).toBeVisible();
    await expect(this.firstNameTextbox).toBeVisible();
    await expect(this.lastNameTextbox).toBeVisible();
    await expect(this.addressStreetTextbox).toBeVisible();
    await expect(this.addressCityTextbox).toBeVisible();
    await expect(this.addressStateTextbox).toBeVisible();
    await expect(this.addressZipCodeTextbox).toBeVisible();
    await expect(this.phoneNumberTextbox).toBeVisible();
    await expect(this.ssnTextbox).toBeVisible();
    await expect(this.createUsernameTextbox).toBeVisible();
    await expect(this.createPasswordTextbox).toBeVisible();
    await expect(this.repeatedPasswordTextbox).toBeVisible();
    await expect(this.registerButton).toBeVisible();
  }

  async fillRequiredFields(firstName: string, lastName: string, addressStreet: string, addressCity: string, addressState: string, addressZipCode: string, phoneNumber: string, ssn: string, createUsername: string, createPassword: string) {
    await this.firstNameTextbox.fill(firstName);
    await this.lastNameTextbox.fill(lastName);
    await this.addressStreetTextbox.fill(addressStreet);
    await this.addressCityTextbox.fill(addressCity);
    await this.addressStateTextbox.fill(addressState);
    await this.addressZipCodeTextbox.fill(addressZipCode);
    await this.phoneNumberTextbox.fill(phoneNumber);
    await this.ssnTextbox.fill(ssn);
    await this.createUsernameTextbox.fill(createUsername);
    await this.createPasswordTextbox.fill(createPassword);
    await this.repeatedPasswordTextbox.fill(createPassword);
  }
  
  async proceedToRegister() {
    await this.registerButton.click();
  }

  async verifyLoginPage() {
    await expect(this.page).toHaveTitle("ParaBank | Welcome | Online Banking");
    await expect(this.customerLoginHeader).toBeVisible();
    await expect(this.usernameTextbox).toBeVisible();
    await expect(this.passwordTextbox).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }
}