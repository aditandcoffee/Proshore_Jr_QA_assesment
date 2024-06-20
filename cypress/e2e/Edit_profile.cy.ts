    describe('Profile Edit Module', ()=> {
        it('Verify update user with no data input', ()=> {
            cy.visit('https://demo.guru99.com/insurance/v1/header.php')
            cy.get('#ui-id-5').click()
            cy.get('#edit_user_ > .actions > .btn').click()
            cy.contains('Input Valid data').should('exist')
            })
    
        it('Verify update user with valid data input', ()=> {
        cy.visit('https://demo.guru99.com/insurance/v1/header.php')
        cy.get('#ui-id-5').click()
        cy.get('#user_surname').type('Adhikari')
        cy.get('#user_firstname').type('Adit')
        cy.get('#user_phone').type('9898989898')
    
        //   // ***handling dropdown***
        cy.get('#user_occupation_id').select("Doctor")
        cy.get('#user_occupation_id').select("Student")
        cy.get('#user_occupation_id').select("Engineer")
        //   // ***handling dropdown***
    
        cy.get('#user_address_attributes_street').type('ktm')
        cy.get('#user_address_attributes_city').type('ktm')
        cy.get('#user_address_attributes_county').type('ktm')
        cy.get('#user_address_attributes_postcode').type('44000')
        cy.get('#edit_user_ > .actions > .btn').click()
        cy.contains('User updated successfully').should('exist')
        })
    
        it('Verify last modified info', ()=> {
        cy.visit('https://demo.guru99.com/insurance/v1/header.php')
        cy.get('#ui-id-5').click()
        cy.get('#user_surname').type('Adhikari')
        cy.get('#user_firstname').type('Adit')
        cy.get('#user_phone').type('9898989898')
    
        //   // ***handling dropdown***
        cy.get('#user_occupation_id').select("Doctor")
        cy.get('#user_occupation_id').select("Student")
        cy.get('#user_occupation_id').select("Engineer")
        //   // ***handling dropdown***
    
        cy.get('#user_address_attributes_street').type('ktm')
        cy.get('#user_address_attributes_city').type('ktm')
        cy.get('#user_address_attributes_county').type('ktm')
        cy.get('#user_address_attributes_postcode').type('44000')
        cy.get('#edit_user_ > .actions > .btn').click()
        cy.contains('Last modified: November 01 2019').should('not.exist')
        
        })
    
        it('Verify lables', ()=> {
        cy.visit('https://demo.guru99.com/insurance/v1/header.php')
        cy.get('#ui-id-5').click()
    
        //   // Handling scrolling
        cy.get('h1').scrollIntoView()
        cy.get(':nth-child(1) > .dropdown-toggle').scrollIntoView()
        cy.get('h1').scrollIntoView()
        //    // Handling scrolling
    
        cy.contains('Title').should('exist')
        cy.contains('Surname').should('exist')
        cy.contains('Firstname').should('exist')
        cy.contains('Phone').should('exist')
        cy.contains('Date of birth').should('exist')
        cy.contains('License type').should('exist')
        cy.contains('License period').should('exist')
        
        })
    
    })