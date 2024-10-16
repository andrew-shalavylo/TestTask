/// <reference types='cypress' />

describe('Login Page Test Suite', () => {
  const username = 'andrew.shalavylo.work@gmail.com';
  const password = 'password';
  const invalidUsername = 'standard@gnail.com';
  const invalidPassword = 'secret';
  const errorMessages = [
    'Invalid Email or password.'];

  beforeEach(() => {
    cy.visit('/');
  });

  it('The user should be able to log in using valid credentials', () => {
    cy.FillingTheEmailField(username);
    cy.FillingThePasswordField(password);
    cy.ClickLoginBtn();
  })

  it('The user should not be able to log in with invalid email', () => {
    cy.FillingTheEmailField(invalidUsername);
    cy.FillingThePasswordField(password);
    cy.ClickLoginBtn();
    cy.AssertIncorrectData(errorMessages[0]);
  })

  it('The user should not be able to log in with invalid password', () => {
    cy.FillingTheEmailField(username);
    cy.FillingThePasswordField(invalidPassword);
    cy.ClickLoginBtn();
    cy.AssertIncorrectData(errorMessages[0]);
  })

  it('The user should not be able to log in with an empty email field', () => {
    cy.FillingThePasswordField(invalidPassword);
    cy.ClickLoginBtn();
    cy.AssertIncorrectData(errorMessages[0]);
  })

  it('The user should not be able to log in with an empty “Password” field', () => {
    cy.FillingTheEmailField(invalidUsername);
    cy.ClickLoginBtn();
    cy.AssertIncorrectData(errorMessages[0]);
  })
})
