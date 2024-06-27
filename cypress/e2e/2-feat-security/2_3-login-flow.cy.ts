// use config variables
// Check for what happens after real login success and failure

/**
 * Given a user at login flow
 *  When sends valid credentials
 *    Then should hide login menu
 *  When sends invalid credentials
 *    Then should still display anonymous menu
 */
describe("Given a user at login flow", () => {
  const loginUrl = "/auth/login";
  const loginApiUrl = `${Cypress.env("apiUrl")}/login`;
  beforeEach(() => {
    // intercept just to wait for the request to finish
    cy.intercept("POST", loginApiUrl).as("postLogin");
    cy.visit(loginUrl);
    cy.get(`a[href="${loginUrl}"]`).as("loginMenu");
  });
  context("when sends valid credentials", () => {
    beforeEach(() => {
      const credentials: any = Cypress.env("testUser")
      cy.get("form", { timeout: 500 }).type('{enter}');
      cy.get("#email").type(credentials.email);
      cy.get("#password").type(credentials.password);
      cy.get("button").click();
      // cy.wait('@loginMenu');
      cy.wait("@postLogin"); // wait for the request to finish
    });
    it("Then should hide login menu", () => {
      cy.get('@loginMenu') // the login menu
        .should("not.exist"); // assert not exist
    });
  });

  context("When sends invalid credentials", () => {
    beforeEach(() => {
      cy.get("#email").clear().type("wrong@email.dev");
      cy.get("#password").clear().type("wrong_password");
      cy.get("button").click();
      cy.wait("@postLogin"); // wait for the request to finish
    });
    it("Then should still display anonymous menu", () => {
      //cy.wait(10000);
      //cy.wait('@loginMenu');
      cy.get('@loginMenu', { timeout: 10000 })  // the login menu exists
    });
  });
});
