class updateTemplatesAssertions {
  
    checkTemplateIsContain(templateNewTitle){
        cy.get("[data-testid=card-name]").should("contain", templateNewTitle);
          return this;
      }
  }
  
  export default updateTemplatesAssertions;