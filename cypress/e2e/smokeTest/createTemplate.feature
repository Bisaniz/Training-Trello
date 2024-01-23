Feature: Add new template
    The template should be added successfully

    Scenario: Verify that the user can add new template successfully
      Given The user navigated to the board
        When The user click on add new template button
        And Enter templateTitle in title input field
        And Click on add button
        Then The template should be added successfully