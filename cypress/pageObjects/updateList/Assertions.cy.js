class updateListsAssertions {
  
    checklistNameContain(listName){
        cy.get("[data-testid=list-name]").eq(0).should("contain", listName);
          return this;
      }
  }
  
  export default updateListsAssertions;