Feature: ParaBank
        Background:
            Given I am on the ParaBank login page

        Scenario: End To End Test for ParaBank Application
            #  Account Creation
             When I click on the Register link
             Then I should see the account sign up sheet
             When I register the following user details:
                  | Fields     | Value            |
                  | First Name | John             |
                  | Last Name  | Doe              |
                  | Address    | 123 Main St      |
                  | City       | Anytown          |
                  | State      | CA               |
                  | Zip Code   | 12345            |
                  | Phone      | 1234567890       |
                  | SSN        | 123-45-6789      |
                  | Username   | johndoe_{random} |
                  | Password   | password123      |
             Then customer creation should be successful
             When I proceed to logout
             Then I should see the Login Page of ParaBank
             
             # Login with the created account
             When I login using credentials of the created account
             Then I should see the Accounts Overview page

             # Check Home Page Global Navigation Link
             When I click the Home Page global navigation link
             Then I should see the ParaBank home page

             # Open new savings account
             When I open a new "Savings" account
             Then I should see success message for new account creation
             When I click on the Accounts Overview navigation link
             Then I can see the new account has "$100.00" balance

            # Transfer funds between accounts
             When I click the Transfer Funds navigation link
              And I transfer "$50.00" from the new account to the existing account
             Then I should see success message for fund transfer
             When I click on the Accounts Overview navigation link
             Then I can see the new account has "$150.00" balance

             # Pay bills using new savings account
             When I click the Bill Pay navigation link
              And I do a bill payment using the new account with the following details:
                  | Fields           | Value      |
                  | Payee Name       | Test Payee |
                  | Address          | 456 Elm St |
                  | City             | Othertown  |
                  | State            | NY         |
                  | Zip Code         | 67890      |
                  | Phone            | 9876543210 |
                  | Payee To Account | 1234567890 |
                  | Amount           | $50.00     |
             Then I should see success message for bill payment

             # Transaction history validation via Application
             When I search the transaction history of the bill payment transaction via API
             Then I should see the transaction history with the correct details