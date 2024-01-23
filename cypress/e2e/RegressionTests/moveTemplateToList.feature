Feature: move template to list
    The template should be moved successfully

    Scenario: Verify that the user can move template to the list successfully
      Given The user navigated to the board
        When The user click on the button move
        And Click on the list drop-down
        And Choose the list
        Then The template should be moved successfully
