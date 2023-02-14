/// <reference types="cypress" />
describe('Form Layout Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Type in form elements and click submit', () => {
        cy.contains('a', 'Form Layout').click();
        cy.contains('.card h5', 'Inline').siblings('.formgroup-inline')
            .then(form => {
                cy.wrap(form).find('input').each(el => cy.wrap(el).type('hello'));
                cy.wrap(form).find('button').click();
                cy.wait(2000);
                cy.wrap(form).find('input').each(el => cy.wrap(el).clear());
            });
    });

    it.only('Select Dropdown Should Work', () => {
        cy.contains('a', 'Form Layout').click();
        cy.contains('.card h5', 'Advanced').siblings('.grid').then(form => {
            cy.wrap([0, 1, 2]).each((_, index) => {
                const selectInput = form.find('p-dropdown');
                cy.wrap(selectInput).click();
                cy.get('p-overlay[ng-reflect-target="@parent"]').then(overlay => {
                    cy.wrap(overlay).get('p-dropdownitem').eq(index).then(ddElement => {
                        let textContent = ddElement.find('span').text();
                        cy.wrap(ddElement).click();
                        cy.wrap(selectInput).find('.p-dropdown-label').invoke('text').should('contain', textContent);
                    });
                });
            });
        });
    });
});
