class hideTemplatesFromListActions{
    // methods needed in createAccount page 

    // openBoard(){
    //     cy.visit("");
    //     return this;
    // }

    clickOnButtonHide(){
        cy.get(".window-module .js-unarchive-card").click("center" , {force: true});
        return this;
    }

}

export default hideTemplatesFromListActions;