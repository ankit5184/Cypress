import LoginPage from "../Pages/LoginPage"
import LogoutPage from "../Pages/LogoutPage"

const loginPage = new LoginPage()
const logoutPage = new LogoutPage()
const name = "standard_user"
const password = "secret_sauce"



Cypress.Commands.add('login', () => {
    loginPage.navigateToLogin(name, password)
})
Cypress.Commands.add('logout', () => {
    logoutPage.Logout()
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})