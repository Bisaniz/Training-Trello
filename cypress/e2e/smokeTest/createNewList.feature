Feature: Create new list
    The list should be created successfully

    Scenario: Verify that the user can create new list successfully
      Given The user navigated to the board
        When The user click on add new list button
        And Enter listTitle in title input field
        And Click on add button
        Then The list should be added successfully