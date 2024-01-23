class moveTemplatesToListAssertions {
  
    checkNewListIsContain(templateTitle){
        cy.get("[data-testid=list]").eq(2).should("contain", templateTitle);
          return this;
      }
  }
  
  export default moveTemplatesToListAssertions;