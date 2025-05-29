import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../Pages/LoginPage';

const loginPage = new LoginPage();

Given('I visit the login page', () => {
  loginPage.visit();
});

When('I enter the username {string}', (username) => {
  loginPage.enterUsername(username);
});

When('I enter the password {string}', (password) => {
  loginPage.enterPassword(password);
});

When('I click the login button', () => {
  loginPage.clickLogin();
});

Then('I should be redirected to the inventory page', () => {
  cy.url().should('include', '/inventory');
});

Then('I should see an error message {string}', (errorMessage) => {
  cy.get('[data-test="error"]').should('be.visible').and('contain', errorMessage);
});
 