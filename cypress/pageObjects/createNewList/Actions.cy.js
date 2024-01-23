class createNewListsActions{
    // methods needed in createAccount page 

    // openBoard(){
    //     cy.visit("");
    //     return this;
    // }
    
    clickOnAddNewListbutton(){
        cy.get("[data-testid=list-composer-button]").click();
        return this;
    }

    typeInListTitleField(listTitle){
        cy.get("[data-testid=list-name-textarea]").last().type(listTitle);
        return this;
    }

    clickOnAddListButton(){
        cy.get("[data-testid=list-composer-add-list-button]").first().click();
        cy.screenshot({capture:"fullPage"})
        return this;
    }

}

export default createNewListsActions;