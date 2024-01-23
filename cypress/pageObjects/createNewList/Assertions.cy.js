class createNewListsAssertions {
  
    checklistIsContain(listName){
        cy.get("[data-testid=list-name]").should("contain", listName);
          return this;
      }
  }
  
  export default createNewListsAssertions;