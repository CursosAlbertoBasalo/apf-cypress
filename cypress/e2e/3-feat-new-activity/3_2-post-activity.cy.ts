// request

/**
 * Given a user with a token
 *  When sends a POST request to create a new activity
 *    Then should return a 201 status code
*/
describe('Given a user with a token', () => {
  const apiUrl = Cypress.env('apiUrl');
  let accessToken = '';
  beforeEach(() => {
    const credentials: any = Cypress.env("testUser")
    const urlLogin = `${apiUrl}/login`
    cy.request({
      method: 'POST',
      url: urlLogin,
      body: credentials
    }).its('body').its('accessToken').then(result => {
      accessToken = result;
      cy.log(accessToken);
    })
  })
  context('When sends a POST request to create a new activity', () => {
    beforeEach(() => {
      const urlActivity = `${apiUrl}/activities`
      const newActivity = {
        name: 'Surf',
        location: 'Barcelona',
        price: 200,
        date: '2024-08-14',
        minParticipants: 4,
        maxParticipants: 8,
      }
      cy.request({
        method: 'POST',
        url: urlActivity,
        body: newActivity,
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).as('postActivity')
    })
    it('Then should return a 201 status code', () => {
      cy.get('@postActivity').its('status').should('equal', 201)
    })
  })
})