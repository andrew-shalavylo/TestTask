// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('getByDataTest', (selector) => {
//     cy.get(`[data-test="${selector}"]`);
//   });

Cypress.Commands.add('FillingTheEmailField', (data) => {
  cy.get('#user_email').clear();
  cy.get('#user_email').type(data);
});

Cypress.Commands.add('FillingThePasswordField', (data) => {
  cy.get('#user_password').clear();
  cy.get('#user_password').type(data);
});

Cypress.Commands.add('ClickLoginBtn', () => {
  cy.get("[value='Submit']").click();
});

Cypress.Commands.add('AssertIncorrectData', (Message) => {
  cy.get('.panel-body').should('contain', Message);
});
