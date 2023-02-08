/// <reference types="cypress" />
describe('Test', () => {
    it('Type in form elements and click submit', () => {
        cy.visit('/');
        cy.contains('a', 'Form Layout').click();
        cy.contains('.card h5', 'Inline').siblings('.formgroup-inline')
            .then(form => {
                cy.wrap(form).find('input').each(el => cy.wrap(el).type('hello'));
                cy.wrap(form).find('button').click();
                cy.wait(2000);
                cy.wrap(form).find('input').each(el => cy.wrap(el).clear());
            });
    });

    it.only('Select Dropdown', () => {
        cy.visit('/');
        cy.contains('a', 'Form Layout').click();
        cy.contains('.card h5', 'Advanced').siblings('.grid').then(form => {
            const selectInput = form.find('p-dropdown');
            cy.wrap(selectInput).click();
            // cy.get('p-overlay [target="@parent"]');
        });
    });
});
