@job-search @regression
Feature: Randstad - Job search

    Background:
        Given I navigate to the homepage
        And I login using username and password
        # And I login using username '<username>' and password '<password>'

        # Examples:
        #     | username | password |
        #     | magnus   | pwd      |


    Scenario: Job search feature tryout - data from Scenario Outline
        When I fill in a specific title <title> 
        #'<title>'
        And I fill in a specific location <location>
        #'<location>'
        And I select a specific distance <distance>
        #'<distance>'
        And I press the Search button
        Then The message <result> should be displayed
        #'<result>'

        Examples:
            | title           | location | distance | result |
            | testare         | lund     | 10 km    | Tack   |
            | software tester | london   | 100 km   | Tack   |
            | software tester | skåne    | 100 km   | Attans |

    @tabs
    Scenario: Accessing free positions tab
        When I press the Free positions tab
        Then The new page title should be <title>
        And There should be a header containing <contents>

        Examples:
            | title    | contents         |
            | randstad | hittade för dig. |