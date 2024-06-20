
describe('The Activity Bookings home page example', () => {
  beforeEach(() => {
    cy.visit('')
  })
  it('can be visitable', () => {
    //cy.visit('http://localhost:4200/')
  })
  it('has header', () => {
    //cy.visit('http://localhost:4200/')
    cy.get('header')
  })
  it('has header with text `Activity Bookings` ', () => {
    //cy.visit('http://localhost:4200/')
    cy.get('header').contains("Activity Bookings")
  })
})