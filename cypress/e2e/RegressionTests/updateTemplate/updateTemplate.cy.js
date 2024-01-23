import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import updateTemplatesActions from "../../../pageObjects/updateTemplate/Actions.cy";
import updateTemplatesAssertions from "../../../pageObjects/updateTemplate/Assertions.cy";


const sharedDataUtil= new sharedDataUtils
const updateTemplateAction = new updateTemplatesActions
const updateTemplateAssertions = new updateTemplatesAssertions
const sharedAction= new sharedActions

const boardName = "CypressBoard";
const templateTitle = "CypressTemplate";
const templateNewTitle = "CypressTemp";
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


When("The user click on the template name to change it",()=>{
    updateTemplateAction.clickOnTemplateName()
});

When("Enter templateTitle in title input field",()=>{
    updateTemplateAction.typeInTemplateTitleField(templateNewTitle)
});

When("Click on save button",()=>{
    updateTemplateAction.clickOnSaveButton()
});


Then("The templateName should be updated successfully",()=>{
    updateTemplateAssertions.checkTemplateIsContain("CypressTemp")
});

    after(()=>{
        // cy.get("@boardResponse").then((data)=>{
        //     sharedDataUtil.deleteBoard(data.body.id)
        // });  
    sharedDataUtil.deleteBoard(boardId)
    }); 