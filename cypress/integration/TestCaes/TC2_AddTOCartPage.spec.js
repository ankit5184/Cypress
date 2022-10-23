import AddToCartPage from "../../Pages/AddToCartPage";

const addtocartPage = new AddToCartPage()

describe('Add to cart the Website', function () {

    it('Add to cart', function () {
        cy.login()
        addtocartPage.addToCart()
        cy.logout()
    })
})