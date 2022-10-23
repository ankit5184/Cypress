class LoginPage{

    username_xp = '//input[@placeholder="Username"]'
    password_xp = '//input[@placeholder="Password"]'
    login_xp = '//input[@type="submit"]'

    navigateToLogin(name,password){
        cy.visit('/')
        cy.xpath(this.username_xp).type(name)
        cy.xpath(this.password_xp).type(password)
        cy.xpath(this.login_xp).click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html')
    }
}
export default LoginPage