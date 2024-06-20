    describe('Profile Module', ()=> {

        it('Verify information', ()=> {
        cy.visit('https://demo.guru99.com/insurance/v1/header.php')
        cy.get('#ui-id-4').click()
        cy.contains('Adit Adhikari').should('exist')
        })
    
    
        it('Verify last modified info', ()=> {
        cy.visit('https://demo.guru99.com/insurance/v1/header.php')
        cy.get('#ui-id-4').click()
        cy.contains('Last modified: November 01 2019').should('not.exist')
        })
    
        it('Verify lables', ()=> {
            cy.visit('https://demo.guru99.com/insurance/v1/header.php')
            cy.get('#ui-id-4').click()
            cy.contains('Title').should('exist')
            cy.contains('Firstname').should('exist')
            cy.contains('Surname').should('exist')
            cy.contains('Phone').should('exist')
            cy.contains('Date of birth').should('exist')
            cy.contains('License type').should('exist')
            cy.contains('License period').should('exist')
        
        })
    
    })