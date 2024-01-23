import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import hideTemplatesFromListActions from "../../../pageObjects/hideTemplateFromList/Actions.cy";
import hideTemplatesFromListAssertions from "../../../pageObjects/hideTemplateFromList/Assertions.cy";



const sharedDataUtil= new sharedDataUtils
const hideTemplateAction = new hideTemplatesFromListActions
const hideTemplateAssertions = new hideTemplatesFromListAssertions
const sharedAction= new sharedActions

const boardName = "CypressBoard";
const templateTitle = "CypressTemplate";
let boardId, boardURL;


before(()=>{
    cy.visit("https://trello.com/login");
    cy.get('#user').clear().type("bisandawabsheh@gmail.com");
    cy.get('#login').first().click();
    cy.wait(1000);
    cy.origin("https://id.atlassian.com",()=>{
        // { args:{ password } },({password}) 
        cy.get('#password').clear().type("1172950@B");
        cy.get('#login-submit').click();
    }); 
    sharedDataUtil.createNewBoard(boardName).then((response)=>{
        boardId = response.body.id
        boardURL = response.body.url
    })
    // sharedDataUtil.createNewBoard(boardName)
    // .as('boardResponse')
})


Given("The user navigated to the board",()=>{
    cy.wait(3000)
    sharedAction.openBoard(boardURL)
    cy.get("[data-testid=TemplateCardIcon]").first().click();
    cy.get("[data-testid=create-new-template-card-button]").click();
    cy.get("[data-testid=create-template-card-composer]").type(templateTitle);
    cy.get("[data-testid=new-template-card-submit-button]").click();
    // cy.get("@boardResponse").then((data)=>{
    //     cy.log(data)
    //     sharedAction.openBoard(data.body.url);
    // })
});


When("The user click on the button hide",()=>{
    hideTemplateAction.clickOnButtonHide()
});



Then("The template should be hidden successfully",()=>{
    hideTemplateAssertions.checkButtonNameIsContain()
});

    after(()=>{
        // cy.get("@boardResponse").then((data)=>{
        //     sharedDataUtil.deleteBoard(data.body.id)
        // });  
    sharedDataUtil.deleteBoard(boardId)
    }); 