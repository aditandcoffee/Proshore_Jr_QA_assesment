    describe('Logout Module',()=> {


        it('Verify logout',()=> {
        cy.visit('https://demo.guru99.com/insurance/v1/header.php')
        cy.get('.button_to > .btn').click()
        cy.contains('Login').should('not.exist')
        })
    
        it('Verify logout validation',()=> {
        cy.visit('https://demo.guru99.com/insurance/v1/header.php')
        cy.get('.button_to > .btn').click()
        cy.visit('https://demo.guru99.com/insurance/v1/header.php')
        cy.get('#ui-id-5').click()
        cy.get('h1').should('not.exist')
        cy.contains('Login').should('exist')
        })
    
    
    })