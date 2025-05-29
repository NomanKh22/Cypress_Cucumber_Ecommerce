import InventoryPage from '../../Pages/InventoryPage';
import CartPage from '../../Pages/CartPage';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const inventoryPage = new InventoryPage();
const cartPage = new CartPage();

Given('I have added an item to the cart', () => {
  inventoryPage.selectItem();
  inventoryPage.addToCart();
});

When('I go to the cart page', () => {
  cartPage.goToCart();
});

Then('the URL should include {string}', (text) => {
  cy.url().should('include', text);
});

When('I proceed to checkout', () => {
  cartPage.checkout();
});