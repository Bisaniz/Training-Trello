class deleteCardsAssertions {
  
    checkArchiveContain(message){
        cy.get(".empty-list").should("contain", message);
          return this;
      }
  }
  
  export default deleteCardsAssertions;