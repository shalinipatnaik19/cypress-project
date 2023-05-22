/// <reference types="cypress" />

describe('login and add a user', () => {
  it('admin login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.--visited').click()
    cy.get('.oxd-dropdown-menu > li').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').type('Admin{enter}')
    //cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()

  })

  // it('navigate to admin', () => {
  //   cy.get(':nth-child(1) > .oxd-main-menu-item').click()
  // })

  // it('navigate to user management > users', () => {
  //   cy.get('.--visited').click()
  //   cy.get('.oxd-dropdown-menu > li').click()
  // })

  // it('add a user', () => {
  //   // cy.get('.orangehrm-header-container > .oxd-button').click()
  //   // cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()


  // })
})