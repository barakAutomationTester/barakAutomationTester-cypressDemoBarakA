/// <reference types= 'Cypress' />
import login from '../../../pageObjects/sauceDemoLoginPage'
import products from '../../../pageObjects/productsPage'


describe('Login test', () => {
  it('login to sauce demo site and verify landing page title', async function() {
    await login.loginSD('standard_user', 'secret_sauce')
    await products.productsTitle().should('have.text', 'Products')
  })
})