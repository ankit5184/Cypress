import LoginPage from "../../Pages/LoginPage"

const loginPage = new LoginPage()

describe('Login Into the Website', function () {

    it('Login', function () {
        cy.login()
        cy.logout()
    })
})