class updateListsActions{
    // methods needed in createAccount page 

    // openBoard(){
    //     cy.visit("");
    //     return this;
    // }
    
    clickOnfirstListname(){
        cy.get("[data-testid=list-name-textarea]").eq(0).clear({force:true}).type("Testing1",{force:true})
        return this;
    }

    clickOnsecondListname(){
        cy.get("[data-testid=list-name-textarea]").eq(1).clear({force:true}).type("Testing2",{force:true})
        return this;
    }

    clickOnthirdListname(){
        cy.get("[data-testid=list-name-textarea]").eq(2).clear({force:true}).type("Testing3",{force:true})
        return this;
    }

}

export default updateListsActions;