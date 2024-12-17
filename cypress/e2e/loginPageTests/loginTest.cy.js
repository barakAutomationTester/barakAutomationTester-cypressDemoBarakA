/// <reference types= 'Cypress' />
import login from '../../pageObjects/sauceDemoLoginPage'
import products from '../../pageObjects/productsPage'
// const login = new loginPage();

describe('Login test', () => {
  it('login to sauce demo site and verify landing page title', () => {
    login.loginSD('standard_user', 'secret_sauce')
    products.productsTitle().should('have.text', 'Products')
  })
})