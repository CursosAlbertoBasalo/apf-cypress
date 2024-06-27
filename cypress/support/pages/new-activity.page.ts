/**
 * Page object for the New Activity page.
 */
export class NewActivityPage {
  visit() {
    cy.loginUI();
    cy.visit('/activity');
  }

  // form = cy.get('form');

  getForm() {
    return cy.get('form');
  }

  typeName(name: string) {
    //cy.get('#name').clear().type(name + '{enter}').blur()
    this.type("#name", name);
  }

  typeLocation(location: string) {
    //cy.get('#location').clear().type(location + '{enter}').blur()
    cy.typeBlur('#location', location);
  }

  type(controlId: string, value: unknown) {
    cy.typeBlur(controlId, value);
  }

  submit() {
    cy.get('form button').click({ force: true });
  }
}