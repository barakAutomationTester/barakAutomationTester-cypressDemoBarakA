class loginPage {

userNameField() {
    return cy.get('[data-test="username"]', {timeout: 3000});
    }

passwordField() {
    return cy.get('[data-test="password"]', {timeout: 3000});
    }

loginButton() {
    return cy.get('[data-test="login-button"]', {timeout: 3000});
    }
    
loginPagTitle() {
    return cy.get('.login_logo', {timeout: 3000});
    }
    
async loginSD(userName, password) {
    cy.visit('https://www.saucedemo.com/')
    await this.loginPagTitle().should('have.text', 'Swag Labs')
    await this.userNameField().type(userName)
    await this.passwordField().type(password)
    await this.loginButton().click()
        }
}
    
module.exports = new loginPage();