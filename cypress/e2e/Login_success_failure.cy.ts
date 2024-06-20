describe('Login Module', () => {
  it('Verify login without any credentials ', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
    cy.contains('Log in').click()
    cy.contains('Enter your Email address and password correct').should('exist')

  })

  it('Verify login with invalid input type', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
    cy.get('#email').type('12345678')
    cy.get('#password').type('12345678')
    cy.contains('Log in').click()
    cy.contains('Enter your Email address and password correct').should('exist')

  })

  it('Verify login with a valid username but invalid password', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
    cy.get('#email').type('Test@gmail.com')
    cy.get('#password').type('12345678')
    cy.contains('Log in').click()
    cy.contains('Enter your Email address and password correct').should('exist')

  })

  it('Verify login with invalid username but valid password', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
    cy.get('#email').type('12345678')
    cy.get('#password').type('Test@123')
    cy.contains('Log in').click()
    cy.contains('Enter your Email address and password correct').should('exist')

  })

  it('Verify login with valid credentials', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
    cy.get('#email').type('Test@gmail.com')
    cy.get('#password').type('Test@123')
    cy.contains('Log in').click()
    cy.contains('Signed in as').should('exist')
    cy.contains('Test@gmail.com').should('exist')

  })

})







