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
//Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('trelloLogin',()=>{
    // const email = "";
    // const password = ;
cy.visit("https://trello.com/login");
cy.get('#user').clear().type("bisandawabsheh@gmail.com");
cy.get('#login').first().click();
cy.wait(1000);
cy.origin("https://id.atlassian.com",()=>{
   // { args:{ password } },({password})=>{
    cy.get('#password').clear().type("1172950@B");
    cy.get('#login-submit').click();
})
})

 




// /// <reference types="cypress" />
// describe('login', () => {

//     //     const email = "bisandawabsheh@gmail.com";
//     //     const password = "1172950@B";
    
//         it('login', () => {
//             cy.visit("https://trello.com/login");
//             cy.wait(1000);
//             cy.trelloLogin();// custom command 
    
//         });
//     });
    
    
    
    
    // Then("The user should be login successfully",()=>{
    //     cy.get(".alert-success").should("contain","The new discount has been added successfully.");
    // });
    
    // import { Given} from "cypress-cucumber-preprocessor/steps";
    
    // const userName = "bisandawabsheh@gmail.com";
    //     const password = "1172950@B";
    
    // Given("The user navigated to login page in trello website",()=>{
    // cy.visit("https://id.atlassian.com/login");
    // cy.trelloLogin(userName,password);// custom command 
    //  });
    