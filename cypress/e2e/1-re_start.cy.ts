// * Configuration, Performance and Conventions: arrange, act, assert

/**
 * The Activity Bookings home page
 *   should be visible
 *   should have a header (redundant)
 *   should have a header with 'Activity Bookings' text
 *   should have a link to albertobasalo.dev
 *   should have an underline element with 'Lab sample' content
 *   should have a link with css class 'secondary'
 */


describe('The Activity Bookings home page', () => {
  const DEVELOPER_URL = 'https://albertobasalo.dev';
  const expectedAppName = 'Lab sample';
  beforeEach(() => {
    cy.visit(''); // Arrange
  });
  it('should be visible', () => {
    cy.get('body') // act
      .should('be.visible'); // assert
  });
  // it('has header', () => {
  // redundant test
  //   cy.get('header')
  // })
  it('should has header with text "Activity Bookings" ', () => {
    cy.get('header') // act
      // .should('contain', "Activity Bookings") // assert
      .contains('Activity Bookings'); // assert
  });

  it(`should have a link to ${DEVELOPER_URL} and an italic element with '${expectedAppName}' content a link with css class 'secondary`, () => {
    cy.get(`a[href="${DEVELOPER_URL}"]`) // act
      .should('exist') // assert
    cy.get('i') // act
      .contains(expectedAppName); //assert
    cy.get('a.secondary').should('exist'); // act assert
  });
});
