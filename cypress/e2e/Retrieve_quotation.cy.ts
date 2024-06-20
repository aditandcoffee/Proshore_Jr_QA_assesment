describe("Retrieve Quotation Module", ()=> {
    it('Verify retrieve with no data input', ()=> {
        cy.visit('https://demo.guru99.com/insurance/v1/header.php')
        cy.get('#ui-id-3').click()
        cy.get('#getquote').click()
        cy.contains('Input Valid data').should('exist')
    })


    it('Verify retrieve with invalid data input', ()=> {
        cy.visit('https://demo.guru99.com/insurance/v1/header.php')
        cy.get('#ui-id-3').click()
        cy.get('form > [type="text"]').type('aabb')
        cy.get('#getquote').click()
        cy.contains('Start of policy').should('not.exist')
    })

    it('Verify retrieve with valid data input', ()=> {
        cy.visit('https://demo.guru99.com/insurance/v1/header.php')
        cy.get('#ui-id-3').click()
        cy.get('form > [type="text"]').type('36425')
        cy.get('#getquote').click()
        cy.contains('Retrieve Quotation').should('exist')
    })
})