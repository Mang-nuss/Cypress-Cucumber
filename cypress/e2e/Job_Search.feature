Feature: Randstad - Job search

    # Scenario: Functioning job search feature
    #     Given I navigate to the Randstad homepage
    #     When I fill in a title
    #     And I fill in a location
    #     And I select a distance
    #     And I press the Search button
    #     Then A result should be displayed

    # Scenario: Job search feature tryout - custom data
    #     Given I navigate to the Randstad homepage
    #     When I fill in a specific title "mjukvarutestare"
    #     And I fill in a specific location "göinge"
    #     And I select a specific distance "10 km"
    #     And I press the Search button
    #     Then A result should be displayed 

    Scenario: Job search feature tryout - data from Scenario Outline
        Given I navigate to the Randstad homepage
        When I fill in a specific title "<title>"
        And I fill in a specific location '<location>'
        And I select a specific distance '<distance>'
        And I press the Search button
        Then The message '<result>' should be displayed 

        Examples:
            | title           | location | distance | result |
            | testare         | lund     | 10 km     | Tack   |
            | software tester | london   | 100 km    | Tack   |
            | software tester | skåne    | 100 km    | Attans |