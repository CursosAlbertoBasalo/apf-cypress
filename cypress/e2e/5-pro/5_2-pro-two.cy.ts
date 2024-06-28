describe('Pro 5_2 TWO', () => {
  beforeEach(() => {
    cy.login('testUser');
    cy.visit('');
  });
  it('should display the user email', () => {
    cy.get('#user');
  });
  it('should still display the user email', () => {
    cy.get('#user');
  });
});
