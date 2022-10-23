class AddToCartPage {

    addtocart_xp = '[class="inventory_item_name"]'
    backtopage_xp= '//button[@name="back-to-products"]'


    addToCart() {
        cy.get(this.addtocart_xp).then(($elements) => {
            let countOfElements = $elements.length;
            cy.log(countOfElements)
            for (let i = 0; i < countOfElements; i++) {
                cy.get(this.addtocart_xp).wait(1000).eq(`${i}`).click()
                cy.get('button').contains('Add to cart').click()
                cy.xpath(this.backtopage_xp).click()
                cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html')
            }
        })
    }
}
export default AddToCartPage