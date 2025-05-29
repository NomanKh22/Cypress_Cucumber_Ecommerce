class CheckoutPage {
    elements = {
        firstName: () => cy.get('[data-test="firstName"]'),
        lastName: () => cy.get('[data-test="lastName"]'),
        postalCode: () => cy.get('[data-test="postalCode"]'),
        continueButton: () => cy.get('.btn_primary'),
        summarySubtotal: () => cy.get('.summary_subtotal_label'),
        summaryTax: () => cy.get('.summary_tax_label'),
        summaryTotal: () => cy.get('.summary_total_label'),
        finishButton: () => cy.get('.btn_action'),
        completeHeader: () => cy.get('.complete-header')
    }

    enterFirstName(firstName) {
        this.elements.firstName().type(firstName);
    }
    enterLastName(lastName) {
        this.elements.lastName().type(lastName);
    }
    enterPostalCode(postalCode) {
        this.elements.postalCode().type(postalCode);
    }
    continueCheckout() {
        this.elements.continueButton().click();
    }
    verifySummary(subtotal, tax, total) {
        this.elements.summarySubtotal().should('have.text', `Item total: ${subtotal}`);
        this.elements.summaryTax().should('have.text', `Tax: ${tax}`);
        this.elements.summaryTotal().should('have.text', `Total: ${total}`);
    }
    finishCheckout() {
        this.elements.finishButton().click();
    }
    verifyOrderComplete() {
        this.elements.completeHeader().should('have.text', 'THANK YOU FOR YOUR ORDER');
    }
}
export default CheckoutPage;