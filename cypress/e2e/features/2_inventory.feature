Feature: Inventory Page

  Background:
    Given I am logged in as a standard user

  Scenario: Select an item and add to cart
    When I select an item from the inventory
    And I add the item to the cart
    Then the cart badge should show "1"