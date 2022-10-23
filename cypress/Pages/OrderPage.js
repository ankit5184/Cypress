class OrderPage{
    cart_xp = '//span[@class="shopping_cart_badge"]'
    checkout_xp = '//button[@name="checkout"]'
    firstname_xp = '//input[@name="firstName"]'
    lastname_xp = '//input[@name="lastName"]'
    pincode_xp = '//input[@name="postalCode"]'
    continue_xp = '//input[@type="submit"]'
    finish_xp = '//button[@name="finish"]'
    backtohome_xp = '//button[@name="back-to-products"]'

    enterdetails(firstname,lastname,pincode){
        cy.xpath(this.cart_xp).click()
        cy.xpath(this.checkout_xp).click()
        cy.xpath(this.firstname_xp).type(firstname)
        cy.xpath(this.lastname_xp).type(lastname)
        cy.xpath(this.pincode_xp).type(pincode)
    }

    continue(){
        cy.xpath(this.continue_xp).click()
    }

    finish(){
        cy.xpath(this.finish_xp).click()
        cy.url().should('be.equal','https://www.saucedemo.com/checkout-complete.html')
    }

    backtohome(){
        cy.xpath(this.backtohome_xp).click()
        cy.url().should('be.equal','https://www.saucedemo.com/inventory.html')
    }
}
export default OrderPage