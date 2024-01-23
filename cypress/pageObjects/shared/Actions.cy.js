class sharedActions{
    //  trelloLogin(email,password);// custom command 

    openBoard(url){
        cy.visit(url);
        return this;
    }

}

// trelloLogin(email,password){
//     cy.get('#user').clear().type(email);
//     cy.get('#login').first().click();
//     cy.wait(1000);
//     cy.origin("https://id.atlassian.com",
//       { args:{ password } },
//       ({password}) =>{
//      cy.get('#password').clear().type(password);
//      cy.get('#login-submit').click();
//     }
//     //)
// //       };
// // };

export default sharedActions;