@tutorial
Feature: WebdriverUniversity - Contact Us page

    Scenario: Valid Contact Us form submission
        Given I navigate to the homepage
        When I click on the Contact Us button
        And I type a first name
        And I type a last name
        And I type an email address
        And I type a comment
        And I press the Submit buttton
        Then I should be presented with a successful Contact Us submission message