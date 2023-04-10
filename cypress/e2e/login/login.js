///<reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given(/^que eu estou na página de login$/, () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
});


When(/^preencher somente o campo Password$/, () => {
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
});


When(/^clicar no botão Login$/, () => {
    cy.get('.oxd-button').click()
});


Then(/^eu vejo a alert "([^"]*)" no input Username$/, (message) => {
    cy.get('.oxd-input-group > .oxd-text').should('have.text', message)
});


When(/^preencher somente o campo Username$/, () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Kaecio')
});


Then(/^eu vejo a alert "([^"]*)" no input Password$/, (message) => {
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text', message)
});


When(/^eu não preencher os campos Username e Password$/, () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{selectall}{backspace}')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{selectall}{backspace}')
});


Then(/^eu vejo a alert "([^"]*)" no input Username e no input Password$/, (message) => {
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text', message)
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text', message)
});


When(/^preencho os campos Username e Password corretamente$/, () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
});


Then(/^sou direcionado para a página Home$/, () => {
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible').should('have.text', 'Dashboard')
    cy.location().should((location) => {
        expect(location.pathname).to.eq('/web/index.php/dashboard/index')
        expect(location.host).to.eq('opensource-demo.orangehrmlive.com')
        expect(location.protocol).to.eq('https:')
    })
});
