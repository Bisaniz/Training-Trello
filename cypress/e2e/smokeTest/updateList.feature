Feature: update list
    The lists name should be updated successfully

    Scenario: Verify that the user can update lists name successfully
      Given The user navigated to the board
        When The user change the first list name
        And The user change the second list name
        And The user change the third list name
        Then The lists name should be updated successfully