import LoginPage from '../../Pages/LoginPage';
import InventoryPage from '../../Pages/InventoryPage';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

Given('I am logged in as a standard user', () => {
  loginPage.visit();
  loginPage.enterUsername('standard_user');
  loginPage.enterPassword('secret_sauce');
  loginPage.clickLogin();
});

When('I select an item from the inventory', () => {
  inventoryPage.selectItem();
});

When('I add the item to the cart', () => {
  inventoryPage.addToCart();
});

Then('the cart badge should show {string}', (count) => {
  cy.get('.shopping_cart_badge').should('contain', count);
});