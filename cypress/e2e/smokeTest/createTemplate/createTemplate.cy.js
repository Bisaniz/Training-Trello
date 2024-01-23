import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import createNewTemplatesActions from "../../../pageObjects/createTemplate/Actions.cy";
import createNewTemplatesAssertions from "../../../pageObjects/createTemplate/Assertions.cy";


const sharedDataUtil= new sharedDataUtils
const createNewTemplateAction = new createNewTemplatesActions
const createNewTemplateAssertions = new createNewTemplatesAssertions
const sharedAction= new sharedActions

const boardName = "CypressBoard";
const templateTitle = "CypressTemplate";
let boardId, boardURL;


before(()=>{
    cy.trelloLogin();
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

    // cy.get("@boardResponse").then((data)=>{
    //     cy.log(data)
    //     sharedAction.openBoard(data.body.url);
    // })
});


When("The user click on add new template button",()=>{
    createNewTemplateAction.clickOnAddNewTemplatebutton()
});

When("Enter templateTitle in title input field",()=>{
    createNewTemplateAction.typeInTemplateTitleField(templateTitle)
});

When("Click on add button",()=>{
    createNewTemplateAction.clickOnAddTemplateButton()
});


Then("The template should be added successfully",()=>{
    createNewTemplateAssertions.checkTemplateIsContain("CypressTemplate")
});

    after(()=>{
        // cy.get("@boardResponse").then((data)=>{
        //     sharedDataUtil.deleteBoard(data.body.id)
        // });  
    sharedDataUtil.deleteBoard(boardId)
    }); 
