Feature: Checkout Page

  Background:
    Given I am logged in as a standard user
    And I have added an item to the cart
    And I am on the checkout page

  Scenario: Complete the checkout process
    When I enter my first name "test"
    And I enter my last name "one"
    And I enter my postal code "54111"
    And I continue checkout
    Then I should see the summary with subtotal "$15.99", tax "$1.28", and total "$17.27"
    When I finish checkout
    Then I should see the order complete message