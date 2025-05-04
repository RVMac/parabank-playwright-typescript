const environments = {
  development: {
    baseUrl: 'https://parabank.parasoft.com',
    apiUrl: 'https://parabank.parasoft.com/parabank/services_proxy/bank',
  }
};

const env = process.env.ENV || 'development';

module.exports = {
  ...environments[env],
  loginUrl: `${environments[env].baseUrl}/parabank/`,
  paraBankAccounts: `${environments[env].apiUrl}/accounts`,
};