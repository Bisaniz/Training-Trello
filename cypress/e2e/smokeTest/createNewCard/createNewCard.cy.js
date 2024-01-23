import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import createNewCardsActions from "../../../pageObjects/createNewCard/Actions.cy";
import createNewCardsAssertions from "../../../pageObjects/createNewCard/Assertions.cy";
//import { data } from "cypress/types/jquery";

const sharedDataUtil= new sharedDataUtils
const createNewCardAction = new createNewCardsActions
const createNewCardAssertions = new createNewCardsAssertions
const sharedAction= new sharedActions

const boardName = "CypressBoard";
const cardTitle = "CypressCard";
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
    // sharedDataUtil.createNewBoard(boardName).then((response)=>{
    //     boardId = response.body.id
    //     boardURL = response.body.url
    // })
    sharedDataUtil.createNewBoard(boardName)
    .as('boardResponse')
})


Given("The user navigated to the board",()=>{
    cy.wait(3000)
    // sharedAction.openBoard(boardURL)

    cy.get("@boardResponse").then((data)=>{
        cy.log(data)
        sharedAction.openBoard(data.body.url);
    })
});


When("The user click on add new card button",()=>{
    createNewCardAction.clickOnAddNewCardbutton()
});

When("Enter cardTitle in title input field",()=>{
    createNewCardAction.typeInCardTitleField(cardTitle)
});

When("Click on add button",()=>{
    createNewCardAction.clickOnAddCardButton()
});


Then("The card should be added successfully",()=>{
    createNewCardAssertions.checkCardIsContain("CypressCard")
});

    after(()=>{
        cy.get("@boardResponse").then((data)=>{
            sharedDataUtil.deleteBoard(data.body.id)
        });  
    // // sharedDataUtil.deleteBoard(boardId)
    }); 
