/**
 * Page object for the New Activity page.
 */
export class NewActivityPage {
  visit() {
    cy.loginUI();
    cy.visit('/activity');
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
}