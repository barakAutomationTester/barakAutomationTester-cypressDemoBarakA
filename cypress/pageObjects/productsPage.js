class productsPage {

    productsTitle() {
        return cy.get('[data-test="title"]');
        }
    
    
        // loginSD (userName, password) {
        //     cy.visit('https://www.saucedemo.com/')
        //     this.userNameField().type(userName)
        //     this.passwordField().type(password)
        //     this.loginButton().click()
        //     cy.get('[data-test="title"]').should('have.text', 'Products')
        //     }
    }
        
module.exports = new productsPage();