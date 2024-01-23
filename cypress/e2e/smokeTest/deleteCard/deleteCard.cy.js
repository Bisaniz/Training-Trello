import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import deleteCardsActions from "../../../pageObjects/deleteCard/Actions.cy";
import deleteCardsAssertions from "../../../pageObjects/deleteCard/Assertions.cy";

const sharedDataUtil= new sharedDataUtils
const deleteCardAction = new deleteCardsActions
const deleteCardAssertions = new deleteCardsAssertions
const sharedAction= new sharedActions

const boardName = "CypressBoard";
//const listTitle = "listTitle";
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
    cy.get("[data-testid=list-add-card-button]").first().click();
    cy.get("[data-testid=list-card-composer-textarea]").type("cardTitle");
    cy.get("[data-testid=list-card-composer-add-card-button]").first().click();

    // cy.get("@boardResponse").then((data)=>{
    //     cy.log(data)
    //     sharedAction.openBoard(data.body.url);
    // })
});


When("The user click on edit card button",()=>{
    deleteCardAction.clickOnEditCardbutton()
});

When("The user click on archive button",()=>{
    deleteCardAction.clickOnArchiveButton()
});

When("Click on archive actionlist button",()=>{
    deleteCardAction.clickOnArchiveActionListButton()
});

When("Click on the delete button",()=>{
    deleteCardAction.clickOnDeleteButton()
});


When("Confirm the delete action",()=>{
    deleteCardAction.confirmDeleteButton()
});



Then("The card should be deleted successfully",()=>{
    deleteCardAssertions.checkArchiveContain("No archived cards")
});

    after(()=>{
    // //     cy.get("@boardResponse").then((data)=>{
    // //         sharedDataUtil.deleteBoard(data.body.id)
    // //     });  
  sharedDataUtil.deleteBoard(boardId)
    }); 