/// <reference types="cypress" />

describe('first spec', () => {
  it('visit google', () => {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('Shalini Patnaik{enter}')
    cy.contains('Videos').click()
  })
})