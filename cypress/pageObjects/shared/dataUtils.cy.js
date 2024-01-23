/// <reference types="cypress" />

import {APIkey,APIToken} from "../../support/constant.cy";

class sharedDataUtils{
    createNewBoard = (boardName)=>{
      return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIkey}&token=${APIToken}`)
    }
   
    deleteBoard = (boardId)=>{
      return cy.request("DELETE",`https://api.trello.com/1/boards/${boardId}?key=${APIkey}&token=${APIToken}`)
         
    }
}

export default sharedDataUtils;

 