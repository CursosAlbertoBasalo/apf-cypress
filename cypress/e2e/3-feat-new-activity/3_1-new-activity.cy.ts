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
      newActivityPage.getForm();
      newActivityPage.typeName(newActivity.name);
      newActivityPage.typeLocation(newActivity.location);
      newActivityPage.type('#price', newActivity.price);
      newActivityPage.type('#date', newActivity.date);
      cy.typeBlur('#minParticipants', newActivity.minParticipants);
      cy.typeBlur('#maxParticipants', newActivity.maxParticipants);
      newActivityPage.submit();
    })
    it('Then should sent the form data to the server', () => {

      // cy.get("@postActivity").then((interception: any) => {
      //   const body = interception.request.body;
      //   expect(body).to.deep.equal(newActivity);
      // });

      //.its('name').should('equal', newActivity.name);
      //.should('deep.equal', newActivity);
      cy.get("@postActivity")
        .its('request')
        .its('body')
        .then((body: any) => {
          const { userId, slug, ...expected } = body;
          expect(newActivity).to.deep.equal(expected); // assert
        });
    })
  })
})