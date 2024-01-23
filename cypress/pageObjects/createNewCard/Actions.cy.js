import {APIkey,APIToken} from "../../support/constant.cy";
class createNewCardsActions{
    // methods needed in createAccount page 

    // openBoard(){
    //     cy.visit("");
    //     return this;
    // }
    
    clickOnAddNewCardbutton(){
        cy.get("[data-testid=list-add-card-button]").first().click();
        return this;
    }

    typeInCardTitleField(cardTitle){
        cy.get("[data-testid=list-card-composer-textarea]").type(cardTitle);
        return this;
    }

    clickOnAddCardButton(){
        cy.get("[data-testid=list-card-composer-add-card-button]").first().click();
        return this;
    }

}

export default createNewCardsActions;