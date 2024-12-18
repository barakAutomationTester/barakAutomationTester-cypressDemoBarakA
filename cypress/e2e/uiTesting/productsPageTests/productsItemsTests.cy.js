/// <reference types= 'Cypress' />
import login from '../../../pageObjects/sauceDemoLoginPage'
import products from '../../../pageObjects/productsPage'

describe('products items test', () => {
  beforeEach(function() {
    cy.clearAllCookies()
  })

  it('login to sauce demo site and verify number of products shown', async function() {
    
    // login to sauceDemo site
    await login.loginSD('standard_user', 'secret_sauce')
    await products.productsTitle().should('have.text', 'Products')

    // verify the number of product items in Products page
    await products.verifyNumberOfProducts(6)
  })
})