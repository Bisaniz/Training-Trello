import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import updateListsActions from "../../../pageObjects/updateList/Actions.cy";
import updateListsAssertions from "../../../pageObjects/updateList/Assertions.cy";

const sharedDataUtil= new sharedDataUtils
const updateListAction = new updateListsActions
const updateListAssertions = new updateListsAssertions
const sharedAction= new sharedActions

const boardName = "CypressBoard";
let boardId,boardURL;


before(()=>{
    cy.trelloLogin();
    sharedDataUtil.createNewBoard(boardName).then((response)=>{
    boardId = response.body.id
     boardURL = response.body.url
    })
//     sharedDataUtil.createNewBoard(boardName)
//     .as('boardResponse')
})


Given("The user navigated to the board",()=>{
    cy.wait(3000)
    sharedAction.openBoard(boardURL)

    // cy.get("@boardResponse").then((data)=>{
    //     cy.log(data)
    //     sharedAction.openBoard(data.body.url);
    // })
});


When("The user change the first list name",()=>{
    updateListAction.clickOnfirstListname()
});

When("The user change the second list name",()=>{
    updateListAction.clickOnsecondListname()
});

When("The user change the third list name",()=>{
    updateListAction.clickOnthirdListname()
});


Then("The lists name should be updated successfully",()=>{
    updateListAssertions.checklistNameContain("Testing1")
});


    after(()=>{
    // //     cy.get("@boardResponse").then((data)=>{
    // //         sharedDataUtil.deleteBoard(data.body.id)
    // //     });  
  sharedDataUtil.deleteBoard(boardId)
    }); 
