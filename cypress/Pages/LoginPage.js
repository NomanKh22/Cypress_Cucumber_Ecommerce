class LoginPage {
    elements = {
        usernameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('#login-button')
    }

    visit() {
        cy.visit('/');
    }
    enterUsername(username) {
        this.elements.usernameInput().type(username);
    }
    enterPassword(password) {
        this.elements.passwordInput().type(password);
    }
    clickLogin() {
        this.elements.loginButton().click();
    }
}
export default LoginPage;