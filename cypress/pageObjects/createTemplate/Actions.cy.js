class createNewTemplatesActions{
    // methods needed in createAccount page 

    // openBoard(){
    //     cy.visit("");
    //     return this;
    // }
    
    clickOnAddNewTemplatebutton(){
        cy.get("[data-testid=TemplateCardIcon]").first().click();
        cy.get("[data-testid=create-new-template-card-button]").click();
        return this;
    }

    typeInTemplateTitleField(templateTitle){
        cy.get("[data-testid=create-template-card-composer]").type(templateTitle);
        return this;
    }

    clickOnAddTemplateButton(){
        cy.get("[data-testid=new-template-card-submit-button]").click();
        cy.get(".dialog-close-button").click("center" , {force: true});
        return this;
    }

}

export default createNewTemplatesActions;