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