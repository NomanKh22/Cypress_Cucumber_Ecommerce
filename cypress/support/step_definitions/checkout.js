import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../Pages/LoginPage';
import InventoryPage from '../../Pages/InventoryPage';
import CartPage from '../../Pages/CartPage';
import CheckoutPage from '../../Pages/CheckoutPage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

// Background steps
// Given('I am logged in as a standard user', () => {
//   loginPage.visit();
//   loginPage.enterUsername('standard_user');
//   loginPage.enterPassword('secret_sauce');
//   loginPage.clickLogin();
// });

// Given('I have added an item to the cart', () => {
//   // Assumes InventoryPage has a method to add a default item
//   inventoryPage.addToCart();
// });

Given('I am on the checkout page', () => {
  cartPage.goToCart();
  cartPage.checkout();
});

// Scenario steps
When('I enter my first name {string}', (firstName) => {
  checkoutPage.enterFirstName(firstName);
});

When('I enter my last name {string}', (lastName) => {
  checkoutPage.enterLastName(lastName);
});

When('I enter my postal code {string}', (postalCode) => {
  checkoutPage.enterPostalCode(postalCode);
});

When('I continue checkout', () => {
  checkoutPage.continueCheckout();
});

Then(
  'I should see the summary with subtotal {string}, tax {string}, and total {string}',
  (subtotal, tax, total) => {
    checkoutPage.verifySummary(subtotal, tax, total);
  }
);

When('I finish checkout', () => {
  checkoutPage.finishCheckout();
});

Then('I should see the order complete message', () => {
  checkoutPage.verifyOrderComplete();
});