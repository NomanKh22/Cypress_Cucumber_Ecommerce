Feature: Login Functionality

  Scenario Outline: Login attempts with different credentials
    Given I visit the login page
    When I enter the username "<username>"
    And I enter the password "<password>"
    And I click the login button
    Then <outcome>

    Examples:
      | username        | password       | outcome                                                        |
      | standard_user   | secret_sauce   | I should be redirected to the inventory page                   |
      | invalid_user    | wrong_password | I should see an error message "Username and password do not match" |
