class CartPage {
    elements = {
        cartIcon: () => cy.get('.shopping_cart_link'),
        checkoutButton: () => cy.get('.btn_action')
    }

    goToCart() {
        this.elements.cartIcon().click();
    }
    checkout() {
        this.elements.checkoutButton().click();
    }
}
export default CartPage;