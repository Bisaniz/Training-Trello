class moveTemplatesToListActions{
    // methods needed in createAccount page 

    // openBoard(){
    //     cy.visit("");
    //     return this;
    // }

    clickOnButtonMove(){
        cy.get(".window-module .js-move-card").click("center" , {force: true});
        return this;
    }

    clickOnTheListDropDown(){
        cy.get("[data-testid=move-card-popover-select-list-destination]").select("Done");;
        return this;
    }

    chooseTheList(){
        cy.get("[data-testid=move-card-popover-move-button]").click("center" , {force: true});
        cy.get(".dialog-close-button").click("center" , {force: true});
        return this;
    }

}

export default moveTemplatesToListActions;