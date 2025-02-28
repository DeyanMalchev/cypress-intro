describe('Login tests', () => {
    beforeEach(() => {
        // Navigate to the login page. Adjust URL if necessary.
        cy.visit('http://localhost:8080/login');
    });

    it('should pass', () => {
        // Assume the login form has fields for email and password with proper data-test-ids
        cy.get('[data-test-id="login-email"]').clear().type("user@example.com");
        cy.get('[data-test-id="login-password"]').clear().type('ValidPasssss123');
        cy.get('[data-test-id="login-submit"]').click();
    });

    it('should show error when email is empty', () => {
        cy.get('[data-test-id="login-email"]').clear();
        cy.get('[data-test-id="login-submit"]').click().type("ValidPasssss123");
    });

    it('should show error when password is empty', () => {
        cy.get('[data-test-id="login-email"]').clear().type('user@gmail.com');
        cy.get('[data-test-id="login-submit"]').clear().click();
    });
});
