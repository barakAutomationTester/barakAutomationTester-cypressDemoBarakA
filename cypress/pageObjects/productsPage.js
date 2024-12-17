class productsPage {

    productsTitle() {
        return cy.get('[data-test="title"]')
        }

    productsNames() {
        return cy.get('[data-test="inventory-item-name"]')
    }
    
    
    async verifyNumberOfProducts (numberOfProducts) {
        const productsList = []
        await cy.get('[data-test="inventory-item-name"]').each((product) => {
                productsList.push(product)
            }).then(productsList => {
                expect(productsList.length).to.equal(numberOfProducts)
        })
    }         
    }
        
module.exports = new productsPage();