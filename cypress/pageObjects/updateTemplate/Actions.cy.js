class updateTemplatesActions{
    // methods needed in createAccount page 

    // openBoard(){
    //     cy.visit("");
    //     return this;
    // }
    
    clickOnTemplateName(){
        cy.get(".window-title").click();
        return this;
    }

    typeInTemplateTitleField(templateNewTitle){
        cy.get(".window-title").clear().type(templateNewTitle);
        return this;
    }

    clickOnSaveButton(){
        cy.get(".window-header-icon").click("center" , {force: true});
        return this;
    }

}

export default updateTemplatesActions;