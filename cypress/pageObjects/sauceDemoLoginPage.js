class loginPage {

userNameField() {
    return cy.get('[data-test="username"]');
    }

passwordField() {
    return cy.get('[data-test="password"]');
    }

loginButton() {
    return cy.get('[data-test="login-button"]');
    }   
    
loginSD(userName, password) {
    cy.visit('https://www.saucedemo.com/')
    this.userNameField().type(userName)
    this.passwordField().type(password)
    this.loginButton().click()
        }
}
    
module.exports = new loginPage();