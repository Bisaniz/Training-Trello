class deleteCardsActions{
    // methods needed in createAccount page 

    // openBoard(){
    //     cy.visit("");
    //     return this;
    // }
    
    clickOnEditCardbutton(){
        cy.wait(3000)
        cy.get("[data-testid=card-name]").first().click("center" , {force:true});
        return this;
    }

    clickOnArchiveButton(){
        cy.get(".button-link [title=Archive]").click("center" , {force: true});
        cy.get(".dialog-close-button").click("center" , {force: true});
        return this;
    }

    clickOnArchiveActionListButton(){
        cy.wait(500);
        cy.get(".board-header [data-testid=OverflowMenuHorizontalIcon]").click();
        cy.get(".board-menu-navigation-item-link").eq(2).click();
        return this;
    }



    clickOnDeleteButton(){
        cy.get(".js-delete ").first().click();
        return this;
    }

    confirmDeleteButton(){
        cy.get("[type=submit]").click();
        return this;
    }

}

export default deleteCardsActions;