class InventoryPage {
    elements = {
        item: (itemId = 'item_1_title_link') => cy.get(`#${itemId} > .inventory_item_name`),
        addToCartButton: () => cy.get('.btn_primary')
    }

    selectItem(itemId = 'item_1_title_link') {
        this.elements.item(itemId).click();
    }
    addToCart() {
        this.elements.addToCartButton().click();
    }
}
export default InventoryPage;