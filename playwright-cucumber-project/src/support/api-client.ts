import { APIResponse, request } from "playwright";

export class ApiClient {

  /// NOTE: I initially separated the initialization of newContext to in a different method, but the baseURL of newContext is not working as expected.
  /// So I merged the two methods into one simplified method.
  /// But the correct way to do it is to separate the initialization of newContext and the API calls into two different methods.

  async getTransactionsByAmount(
    username: string, 
    password: string, 
    accountId: number, 
    amount: number): Promise<APIResponse> {

    const context = await request.newContext({
      httpCredentials: {
            username: username,
            password: password
      },
    });

    const response = await context.get('https://parabank.parasoft.com/parabank/services_proxy/bank/accounts/'+ accountId +'/transactions/amount/'+ amount);

    return response;
  }
}

export default ApiClient;