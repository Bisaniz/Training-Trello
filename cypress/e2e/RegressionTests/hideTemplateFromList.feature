Feature: hide template from list
    The template should be hidden successfully

    Scenario: Verify that the user can hide template from the list successfully
      Given The user navigated to the board
        When The user click on the button hide
        Then The template should be hidden successfully