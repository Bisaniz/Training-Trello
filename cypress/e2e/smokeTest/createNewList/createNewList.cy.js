import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import createNewListsActions from "../../../pageObjects/createNewList/Actions.cy";
import createNewListsAssertions from "../../../pageObjects/createNewList/Assertions.cy";

const sharedDataUtil= new sharedDataUtils
const createNewListAction = new createNewListsActions
const createNewListAssertions = new createNewListsAssertions
const sharedAction= new sharedActions

const boardName = "CypressBoard";
const listTitle = "listTitle";
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


When("The user click on add new list button",()=>{
    createNewListAction.clickOnAddNewListbutton()
});

When("Enter listTitle in title input field",()=>{
    createNewListAction.typeInListTitleField(listTitle)
});

When("Click on add button",()=>{
    createNewListAction.clickOnAddListButton()
});


Then("The list should be added successfully",()=>{
    createNewListAssertions.checklistIsContain("Done")
});

    after(()=>{
    // //     cy.get("@boardResponse").then((data)=>{
    // //         sharedDataUtil.deleteBoard(data.body.id)
    // //     });  
  sharedDataUtil.deleteBoard(boardId)
    }); 
