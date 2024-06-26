export function loginUICredentials(email: string, password: string) {
  const loginUrl = "/auth/login";
  const loginApiUrl = `${Cypress.env("apiUrl")}/login`;
  cy.intercept("POST", loginApiUrl).as("postLogin");
  cy.visit(loginUrl);
  cy.get("form").type('{enter}');
  cy.get("#email").type(email);
  cy.get("#password").type(password);
  cy.get("button").click();
  cy.wait('@postLogin')
}
export function loginUI() {
  const credentials: any = Cypress.env("testUser")
  loginUICredentials(credentials.email, credentials.password)
}

export function typeBlur(selector: string, value: unknown) {
  cy.get(selector).clear().type(value as string).blur()
}