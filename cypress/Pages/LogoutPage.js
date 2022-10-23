class LogoutPage{
    btn_menu = '//button[@id="react-burger-menu-btn"]'

    Logout(){
        cy.xpath(this.btn_menu).click()
        cy.get('a').contains('Logout').click({force:true})
        cy.url().should('be.equal', 'https://www.saucedemo.com/')
    }
}
export default LogoutPage