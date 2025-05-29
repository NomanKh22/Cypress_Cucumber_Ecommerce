
Feature: Login Functionality

  Scenario: Successful login with valid credentials
    Given I visit the login page
    When I enter the username "standard_user"
    And I enter the password "secret_sauce"
    And I click the login button
    Then I should be redirected to the inventory page

  Scenario: Unsuccessful login with invalid credentials
    Given I visit the login page
    When I enter the username "invalid_user"
    And I enter the password "wrong_password"
    And I click the login button
    Then I should see an error message "Username and password do not match"
