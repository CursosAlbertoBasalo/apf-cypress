// * Variables, hooks, logs and functions

/**
 * The Activity Bookings navigation links
 *   should have a link to the repository page
 *   should have a header link with 'activities' text
 *   should have a 'loginLink' id
 *   should navigate to the register page
 *   should not have broken links
 */

describe('The Activity Bookings navigation links', () => {
  const repoHref = 'https://github.com/AlbertoBasalo/ng-lab';
  const loginHref = '/auth/login';
  const loginUrl = 'http://localhost:4200/auth/login';
  const registerUrl = 'http://localhost:4200/auth/register';
  before(() => {
    // cy.visit('');
    cy.log('1️⃣ Before ALL')
  })
  beforeEach(() => {
    cy.log('2️⃣ Before Each ');
    cy.visit('');
  })

  it('should have a link to the repository page', () => {
    cy.get(`a[href="${repoHref}"]`);
  })
  it("should have a header link with 'login' text", () => {
    cy.get('header a') // Act
      .contains('login', { matchCase: false }); // Assert
  });
  it("should have a 'loginLink' id", () => {
    cy.get(`a[href='${loginHref}']`); // Act Assert
  });
  it('should navigate to the register page', () => {
    cy.get(`a[href='${loginHref}']`).click()
    // cy.url().should('eq', loginUrl)
    cy.log('🔁 Navigating to login page');
    cy.get('footer > a').click();
    cy.url().should('eq', registerUrl)
  })
  it('should not have broken links', () => {
    cy.get('a').each((el) => {
      const url = el.prop('href');
      cy.request(url)
    })
  })

  afterEach(() => {
    cy.log('3️⃣ After Each');
  });
  after(() => {
    cy.log('4️⃣ After ALL');
    cy.visit('')
  });
})