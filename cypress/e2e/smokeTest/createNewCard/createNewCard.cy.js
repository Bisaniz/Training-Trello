/// <reference types="cypress" />
describe('login', () => {

    const email = "bisandawabsheh@gmail.com";
    const password = "1172950@B";

    it('login', () => {
        cy.visit("https://id.atlassian.com/login");
        cy.trelloLogin(email,password);// custom command 

    });
});


// import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

// Given("The user navigated to login page in trello website",()=>{
//     cy.visit("https://id.atlassian.com/login");
// });

// When("Enter userName in userName input field",()=>{
//     cy.get("#username").clear().type('bisandawabsheh@gmail.com');
// });

// When("Enter password in password input field",()=>{
//     cy.get("#Password").clear().type('1172950@B');
// });

// When("Click on log in button",()=>{
//     cy.get(".login-submit").click();
// });



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



