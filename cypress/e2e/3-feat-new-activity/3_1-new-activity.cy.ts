/**
 * Given a logged in user visiting the new activity page
 *  When fills the form with valid data
 *    Then should sent the form data to the server
 */

import { NewActivityPage } from "../../support/pages/new-activity.page";

describe('Given a logged in user visiting the new activity page', () => {
  const newActivityPage: NewActivityPage = new NewActivityPage();
  beforeEach(() => {
    cy.intercept('POST', `${Cypress.env('apiUrl')}/activities`).as("postActivity")
    newActivityPage.visit();
  })
  context('When fills the form with valid data', () => {
    const newActivity = {
      name: 'Surf',
      location: 'Barcelona',
      price: 200,
      date: '2024-08-14',
      minParticipants: 4,
      maxParticipants: 8,
    }
    beforeEach(() => {
      cy.get('form');
      newActivityPage.typeName(newActivity.name);
      newActivityPage.typeLocation(newActivity.location);
      newActivityPage.type('#price', newActivity.price);
      newActivityPage.type('#date', newActivity.date);
      cy.typeBlur('#minParticipants', newActivity.minParticipants);
      cy.typeBlur('#maxParticipants', newActivity.maxParticipants);
    })
    it('Then should sent the form data to the server', () => {
      cy.get("@postActivity")
        .its('request')
        .its('body')
        .should('deep.equal', {});
    })
  })
})