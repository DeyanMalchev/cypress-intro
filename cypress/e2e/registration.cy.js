describe('Registration tests', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:8080/')
  })

  it('enter submit without valid user name',() => {
    cy.get('[data-test-id="submit"]').click();

    cy.get('[data-test-id="fullname-error"]').should('be.visible');
  })


  it('full name error is cleared after valid input is added',() => {
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="fullname"').type("John Doe");
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="fullname-error"]').should('not.exist');
  })

  it('enter invalid email',() => {
    cy.get('[data-test-id="email"').type("invalid_email");
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="email-error"]').should('be.visible');
  })

  it('enter valid data and click submit',()=> {
    cy.get('[data-test-id="fullname"').type("John Doe");
    cy.get('[data-test-id="email"').type("john_does@email.com");
    cy.get('[data-test-id="password"').type("12345678");
    cy.get('[data-test-id="gender"').select("Male");
    cy.get('[data-test-id="date"').type("2000-01-01");
    cy.get('[data-test-id="submit"]').click();
    cy.url().should('eq', 'http://localhost:8080/thank-you?') 
  })
})

describe('Registration tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  it('should show error for invalid full name', () => {
    cy.get('[data-test-id="fullname"]').clear().type("");
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="fullname-error"]').should('be.visible');
  });

  it('should show error for invalid email', () => {
    // Enter an invalid email value
    cy.get('[data-test-id="email"]').clear().type('');
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="email-error"]').should('be.visible');
  });

  it('should show error for invalid password', () => {
    // Enter a password that does not meet the validation criteria
    cy.get('[data-test-id="password"]').clear().type('123');
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="password-error"]').should('be.visible');
  });

  it('should show error for mismatched password confirmation', () => {
    // Enter a valid password and a non-matching confirmation
    cy.get('[data-test-id="password"]').clear().type('ValidPass123!');
    cy.get('[data-test-id="confirm-password"]').clear().type('DifferentPass');
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="confirm-password-error"]').should('be.visible');
  });
});