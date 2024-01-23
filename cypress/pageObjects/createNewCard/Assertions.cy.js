class createNewCardsAssertions {
  
    checkCardIsContain(cardName){
        cy.get("[data-testid=trello-card]").should("contain", cardName);
          return this;
      }
  }
  
  export default createNewCardsAssertions;