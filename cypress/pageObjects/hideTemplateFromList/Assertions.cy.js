class hideTemplatesFromListAssertions {
  
    checkButtonNameIsContain(){
        cy.get(".js-unarchive-card").should("contain", "Show in list");
          return this;
      }
  }
  
  export default hideTemplatesFromListAssertions;