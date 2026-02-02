// cypress/integration/login.spec.js

describe('Login Functionality', () => {
  // Base URL for the login page
  const url = 'https://example.com/login';

  // Example user credentials for testing
  const validEmail = 'test@example.com';
  const validPassword = 'password123';
  const invalidEmail = 'invalid@example.com';
  const invalidPassword = 'wrongpassword';

  beforeEach(() => {
    // Visit the login page before each test case
    cy.visit(url);
  });

  it('should display an error message for invalid credentials', () => {
    // Input invalid email and password
    cy.get('input[name="email"]').type(invalidEmail);
    cy.get('input[name="password"]').type(invalidPassword);

    // Click the submit button
    cy.get('button[type="submit"]').click();

    // Assert that the error message is displayed
    cy.get('.error-message')
      .should('be.visible') // Check if the error message is visible
      .and('contain', 'Invalid credentials'); // Check the content of the message
  });

  it('should log in successfully with valid credentials', () => {
    // Input valid email and password
    cy.get('input[name="email"]').type(validEmail);
    cy.get('input[name="password"]').type(validPassword);

    // Click the submit button
    cy.get('button[type="submit"]').click();

    // Assert that the URL contains '/dashboard' after login
    cy.url().should('include', '/dashboard');

    // Assert that a welcome message is displayed on the dashboard
    cy.get('.welcome-message')
      .should('be.visible') // Ensure the welcome message is visible
      .and('contain', 'Welcome'); // Check the content of the message
  });

  it('should display password reset link on the login page', () => {
    // Check if the password reset link is present on the page
    cy.get('a[href="/reset-password"]') // Selector for the password reset link
      .should('be.visible') // Ensure the link is visible
      .and('contain', 'Forgot your password?'); // Ensure the link text is correct
  });

  it('should not allow login with empty fields', () => {
    // Attempt to log in without providing credentials
    cy.get('button[type="submit"]').click(); // Click submit without inputting anything

    // Verify that an error message for empty fields is displayed
    cy.get('.error-message')
      .should('be.visible')
      .and('contain', 'Please enter your email and password'); // Example error message
  });
});
