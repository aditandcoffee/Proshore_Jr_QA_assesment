    describe("Request Quotation Module", () => {
        it('Verify calculate premium without any data', ()=> {
        cy.visit('https://demo.guru99.com/insurance/v1/header.php')
        cy.contains('Request Quotation').click()
        cy.get('.btn-default').click()
        cy.contains('Input Valid data').should('exist')
        })
    
        it('Verify calculate premium with invalid data', ()=> {
        cy.visit('https://demo.guru99.com/insurance/v1/header.php')
        cy.contains('Request Quotation').click()
        cy.get('#quotation_incidents').type('qqq')
        cy.get('#quotation_vehicle_attributes_registration').type("qqq")
        cy.get('#quotation_vehicle_attributes_mileage').type("qqq")
        cy.get('#quotation_vehicle_attributes_value').type("qqq")
        cy.get('.btn-default').click()
        cy.contains('Input Valid data').should('exist')
        })
    
        it('Verify calculate premium with valid data', ()=> {
        cy.visit('https://demo.guru99.com/insurance/v1/header.php')
        cy.contains('Request Quotation').click()
        cy.get('#quotation_incidents').type("3")
        cy.get('#quotation_vehicle_attributes_registration').type("2024")
        cy.get('#quotation_vehicle_attributes_mileage').type("10000")
        cy.get('#quotation_vehicle_attributes_value').type("90000")
        cy.get('.btn-default').click()
        cy.get('#calculatedpremium').should('exist')
        })
    
        it("Verify reset form after data input", () => {
        cy.visit("https://demo.guru99.com/insurance/v1/header.php");
        cy.contains("Request Quotation").click();
        cy.get("#quotation_incidents").type("3");
        cy.get("#quotation_vehicle_attributes_registration").type("2024");
        cy.get("#quotation_vehicle_attributes_mileage").type("10000");
        cy.get("#quotation_vehicle_attributes_value").type("90000");
        cy.get("#resetquote").click();
        cy.get("#quotation_incidents").should("be.empty");
        cy.get("#quotation_vehicle_attributes_registration").should("be.empty");
        cy.get("#quotation_vehicle_attributes_mileage").should("be.empty");
        cy.get("#quotation_vehicle_attributes_value").should("be.empty");
        });
    
        it("Verify save quotation without data input", () => {
        cy.visit("https://demo.guru99.com/insurance/v1/header.php");
        cy.contains("Request Quotation").click();
        cy.get('#new_quotation > .actions > .btn-success').click();
        cy.contains('Input Valid data').should('exist')
        
        });
    
        it("Verify save quotation with data input", () => {
        cy.visit("https://demo.guru99.com/insurance/v1/header.php");
        cy.contains("Request Quotation").click();
        cy.get("#quotation_incidents").type("3");
        cy.get("#quotation_vehicle_attributes_registration").type("2024");
        cy.get("#quotation_vehicle_attributes_mileage").type("10000");
        cy.get("#quotation_vehicle_attributes_value").type("90000");
        cy.get('#new_quotation > .actions > .btn-success').click();
        cy.contains('You have saved this quotation!').should('exist');
        
        });
    });
    
    describe("Retrieve Quotation Module", ()=> {
        it('Verify retrieve with no data input', ()=> {
            cy.visit('https://demo.guru99.com/insurance/v1/header.php')
            cy.get('#ui-id-3').click()
            cy.get('#getquote').click()
            cy.contains('Input Valid data').should('exist')
        })
    
        it('Verify retrieve with valid data input', ()=> {
            cy.visit('https://demo.guru99.com/insurance/v1/header.php')
            cy.get('#ui-id-3').click()
            cy.get('form > [type="text"]').type('36425')
            cy.get('#getquote').click()
            cy.contains('Retrieve Quotation').should('exist')
            cy.contains('Start of policy').should('exist')
        })
    })