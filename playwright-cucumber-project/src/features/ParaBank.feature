Feature: ParaBank
        Background:
            Given I am on the ParaBank login page

        Scenario: End To End Test for ParaBank Application
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
             When I login using credentials of the created account
             Then I should see the Accounts Overview page
            