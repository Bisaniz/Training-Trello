Feature: delete card
    The card should be deleted successfully

    Scenario: Verify that the user can delete a card successfully
      Given The user navigated to the board
        When The user click on edit card button
        And The user click on archive button
        And Click on archive actionlist button
        And Click on the delete button
        And Confirm the delete action
        Then The card should be deleted successfully