
/**
 * Given an already registered and logged user
 *  When clicks on new activity
 *   Then should display the new activity form
 */
describe('Given an already registered and logged user', () => {
  beforeEach(() => {
    cy.loginUI();
    //cy.loginUICredentials('', '');
    cy.visit('');
  })
  context('When clicks on new activity', () => {
    beforeEach(() => {
      const newActivityUrl = '/activity'
      cy.get(`a[href="${newActivityUrl}"]`).click()
    })
    it('Then should display the new activity form', () => {
      cy.get('form')
    })
  })
})

