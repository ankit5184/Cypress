import OrderPage from "../../Pages/OrderPage";
import AddToCartPage from "../../Pages/AddToCartPage";

const orderPage = new OrderPage()
const addtocartPage = new AddToCartPage()

describe('Order from the Website', function () {
    beforeEach(function () {
        cy.fixture("SauceDemoData").then(function (data) {
            this.data = data;
        })
    })

    it('OrderPage', function () {
        const firstname = this.data.firstname
        const lastname = this.data.lastname
        const pincode = this.data.pincode

        cy.login()
        addtocartPage.addToCart()
        orderPage.enterdetails(firstname,lastname,pincode)
        orderPage.continue()
        orderPage.finish()
        orderPage.backtohome()
        cy.logout()
    })
})