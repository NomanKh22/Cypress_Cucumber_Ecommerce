Feature: Cart Page

  Background:
    Given I am logged in as a standard user
    And I have added an item to the cart

  Scenario: Go to cart and proceed to checkout
    When I go to the cart page
    Then the URL should include "/cart"
    When I proceed to checkout
    Then the URL should include "/checkout-step-one"