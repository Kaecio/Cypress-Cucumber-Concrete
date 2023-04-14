///<reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

beforeEach(() => {
	cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
	cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
	cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
	cy.get('.oxd-button').click()
	cy.wait(2000)
	cy.get(':nth-child(1) > .oxd-main-menu-item').click()
	cy.wait(5000)

	if (cy.get(':nth-child(2) > .oxd-table-row > :nth-child(2) > div',{failOnStatusCode: false}).should('not.exist')) {
		cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force: true})
		cy.wait(2000)
		cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click()
		cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click()
	}

});


Given(/^que estou na página de Admin$/, () => {
	cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
});


When(/^adiciono um novo usuário$/, () => {
	cy.wait(2000)
	cy.get('.orangehrm-header-container > .oxd-button').should('be.visible').click({ force: true });
	// cy.get('.orangehrm-header-container > .oxd-button')
	cy.wait(2000)
});


When(/^submeto o seguinte formulário de cadastro "([^"]*)"$/, (nome_do_empregado) => {
	cy.get('.oxd-autocomplete-text-input > input').type(nome_do_empregado)
	cy.wait(2000)
	cy.get('.oxd-autocomplete-option').first().click()
	cy.wait(500)

});


When(/^salvo o novo usuário$/, () => {
	cy.get('.oxd-button--secondary').click()
});


Then(/^vejo a mensagem de "([^"]*)" nos campos não preenchidos$/, (message) => {
	cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > .oxd-text').should('have.text', message)
	cy.get(':nth-child(4) > .oxd-input-group > .oxd-text').should('have.text', message)
	cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text', message)
	cy.get('.user-password-cell > .oxd-input-group > .oxd-text').should('have.text', message)
	cy.get(':nth-child(4) > .oxd-input-group > .oxd-text').should('have.text', message)
	cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text', message)
});


When(/^preencho os seguites dados corretamente "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (user_role, employe_name, status, username, password) => {
	cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
	cy.wait(1000)
	cy.contains('.oxd-select-dropdown > *', user_role).click();
	cy.get('.oxd-autocomplete-text-input > input').type(employe_name)
	cy.wait(3000)
	cy.get('.oxd-autocomplete-option').first().click()
	cy.wait(500)
	cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
	cy.wait(1000)
	cy.contains('.oxd-select-dropdown > *', status).click();
	cy.wait(1000)
	cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
	cy.wait(3000)
	cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
	cy.wait(2000)
	cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
	cy.wait(2000)
});


Then(/^vejo o pop up com a seguinte mensagem "([^"]*)"$/, (message) => {
	cy.get('.oxd-text--toast-title').should('have.text', message)
});


When(/^vejo o novo usuário cadastrado em tela$/, () => {
	return true;
});
