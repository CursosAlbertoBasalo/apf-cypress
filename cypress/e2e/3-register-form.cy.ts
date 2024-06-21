// * Act as a user with Type and Click

/**
 * The register form
 *     should have a form with 4 clean inputs and a submit button disabled
 *   when the users fills the form correctly
 *     should allow to submit the form
 *     should mark all inputs as valid
 *   when the user fills the form incorrectly
 *     should disabled the submit button when start
 *     should mark the username as invalid if it is empty
 *     should mark the username as invalid after clear it
 *     should not show an error message to the user before interaction
 *     should show an error message to the user after typing invalid data
 *     should mark the username as valid if it is not empty
 *     should mark the email as invalid if it is not an email
 *  when the user resets the form
 *     should clear the form when the reset button is clicked
 */

// only skip

describe('The register form', () => {
  const signUpUrl = 'auth/register';
  const expectedInputs = 5;
  beforeEach(() => {
    cy.visit(signUpUrl);
  });
  it('should have a form with 4 clean inputs and a submit button disabled', () => {
    cy.get('form') // search from the root
      .find('fieldset') // search from the last found element
      .find('input') // also traces the selector path
      .should('have.length', expectedInputs);
    cy.get("form button[type='submit']") // directly selector without trace
      .should('be.disabled');
  });
  context('when the users fills the form correctly', () => {
    beforeEach(() => {
      cy.get('#username').clear().type('John').blur();
      cy.get("[type='email']").clear().type('john.doe@acme.com').blur();
      cy.get("[name='password']").first().clear().type('1234a').blur();
      cy.get('#confirm').clear().type('1234a').blur();
      cy.get('#terms').check();
    });
    it('should allow to submit the form', () => {
      cy.get("form button[type='submit']").should('be.enabled');
    });
    it('should mark all inputs as valid', () => {
      cy.get("form fieldset input[aria-invalid='true']").should('have.length', 0);
    });
  });
  context('when the user resets the form', () => {
    it('should clear the form when the reset button is clicked', () => {
      // Arrange
      cy.get('#username').clear().type('John');
      cy.get('[type="email"]').clear().type('not-an-email');
      cy.get('[name="password"]').first().type('123a');
      cy.get('#confirm').type('123a');
      // Act
      cy.get('[type="reset"]').click();
      // Assert
      cy.get('#username').should('be.empty');
      cy.get('[type="email"]').should('be.empty');
      cy.get('[name="password"]').first().should('be.empty');
      cy.get('#confirm').should('be.empty');
    });
  });
  afterEach(() => {
    // Arrange after each test
    // cy.get('[type="reset"]').click();
  });
});
