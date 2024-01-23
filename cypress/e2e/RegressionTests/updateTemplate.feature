Feature: update template
    The template should be updated successfully

    Scenario: Verify that the user can update template successfully
      Given The user navigated to the board
        When The user click on the template name to change it
        And Enter templateTitle in title input field
        And Click on save button
        Then The templateName should be updated successfully