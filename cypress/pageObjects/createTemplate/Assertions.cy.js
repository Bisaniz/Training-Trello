class createNewTemplatesAssertions {
  
    checkTemplateIsContain(templateTitle){
        cy.get("[data-testid=card-name]").should("contain", templateTitle);
          return this;
      }
  }
  
  export default createNewTemplatesAssertions;