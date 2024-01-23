Feature: Add new card
    The card should be added successfully

    Scenario: Verify that the user can add new card successfully
      Given The user navigated to the board
        When The user click on add new card button
        And Enter cardTitle in title input field
        And Click on add button
        Then The card should be added successfully