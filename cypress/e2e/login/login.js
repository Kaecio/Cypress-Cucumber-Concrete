///<reference types="cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given(/^que eu estou na pagina de login$/, () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
});

When(/^preencher somente o campo Password$/, () => {
	cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.wait(2000)
});

When(/^clicar no botao Login$/, () => {
	cy.get('.oxd-button').click();
});

Then(/^eu vejo a alert "([^"]*)" no input Username$/, (message) => {
    cy.get('.oxd-input-group > .oxd-text').should('have.text',message);
    cy.wait(2000)
});

When(/^preencher somente o campo Username$/, () => {
	cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Kaecio')
    cy.wait(2000)
});


Then(/^eu vejo a alert "([^"]*)" no input Password$/, (message) => {
	cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text',message );
    cy.wait(2000)
});


When(/^eu nao preencher os campos Username e Password$/, () => {
	cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{selectall}{backspace}');
	cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{selectall}{backspace}');
});


Then(/^eu vejo a alert "([^"]*)" no input Password e no input Password$/, (message) => {
    cy.wait(2000)
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text',message);
    cy.wait(2000)
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text',message );
});

When(/^preencho os campos Username e Password corretamente$/, () => {
	cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
	cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.wait(2000)
});

Then(/^sou direcionado para a pagina Home$/, () => {
	cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible').should('have.text', 'Dashboard')
});
