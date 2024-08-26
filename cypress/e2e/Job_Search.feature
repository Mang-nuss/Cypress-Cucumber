Feature: Randstad - Job search

    Scenario: Functioning job search feature
        Given I navigate to the Randstad homepage
        When I fill in a title
        And I fill in a location
        And I fill in a distance
        And I press the Search button
        Then A result should be displayed 