// alias, get, find, within...


/**
 * Given the Published Activities list
 *   When the data is loaded
 *    Then should display the list counter And the correct number of items
 *    Then should display the name with a link to the activity detail
 *    Then should display activities name, date and price
 */

describe('Given the Published Activities list', () => {
  const expectedActivities = 17;
  const expectedFirstActivity = { name: 'Standup Surfing', slug: 'standup-surfing' };
  beforeEach(() => {
    cy.visit('');
  });
  context('When the data is loaded', () => {
    beforeEach(() => {
      cy.get('#activities-list').as('activitiesList')
    })
    it('Then should display the list counter And the correct number of items', () => {
      cy.get('#activities-count').should('have.text', expectedActivities);
      cy.get('@activitiesList').children().should('have.length', expectedActivities);
    });
    it('Refactored Then should display the list counter And the correct number of items', () => {
      cy.get('@activitiesList').children().then((result) => {
        const expectedActivities = result.length;
        cy.get('#activities-count').invoke('text').should('contain', expectedActivities);
      })
    });
    it('Then should display the name with a link to the activity detail', () => {
      cy.get('@activitiesList')
        .children()
        .first()
        .find('[itemprop = "name"]')
        .find('a')
        .contains(expectedFirstActivity.name)
        .invoke('attr', 'href')
        .should('contain', expectedFirstActivity.slug);
    });
    it('Then should display activities name, date and price', () => {
      cy.get('@activitiesList')
        .children() // direct descendants
        .first() // the first of the collection
        .as('firstActivityElement'); // save the alias
      cy.get('@firstActivityElement')
        .within(() => { // work inside the element
          cy.get('[itemprop="name"]');
          cy.get('[itemprop="date"]');
          cy.get('[itemprop="price"]');
        });
    });
  })
});