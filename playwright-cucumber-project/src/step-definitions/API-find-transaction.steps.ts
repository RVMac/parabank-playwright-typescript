import { Then, When } from "@cucumber/cucumber";
import ApiClient from "../support/api-client";
import { APIResponse } from "playwright";
import { Serializable } from "child_process";
import { expect } from "playwright/test";

let response: APIResponse;

let username: string;
let password: string;
let accountNumber: string;
let amount: string;

// #region WHEN STEPS
When('I search the transaction history of the bill payment transaction via API', async function () {
  const apiClient = new ApiClient();

  username = this.scenarioContext.get('createUsername');
  password = this.scenarioContext.get('createPassword');
  accountNumber = this.scenarioContext.get('accountNumber');
  amount = this.scenarioContext.get('paidBillAmount');

  response = await apiClient.getTransactionsByAmount(username, password, Number(accountNumber), Number(amount));
});
// #endregion WHEN STEPS


// #region THEN STEPS
Then('I should see the transaction history with the correct details', async function () {
  let responseData: Object[] = await response.json();
  
  expect(Array.isArray(responseData)).toBeTruthy();
  expect(responseData.length).toBeGreaterThan(0);
  
  for (const item of responseData) {
    expect(item).toHaveProperty('id');
    expect(item).toHaveProperty('accountId');
    expect(item).toHaveProperty('type');
    expect(item).toHaveProperty('date');
    expect(item).toHaveProperty('amount');
    expect(item).toHaveProperty('description');
  }

  expect(responseData).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        accountId: accountNumber,
        type: 'Credit',
        amount: Number(amount),
        description: 'Funds Transfer Received',
      })
    ])
  );
});
// #endregion THEN STEPS