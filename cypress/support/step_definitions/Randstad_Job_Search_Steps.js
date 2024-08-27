//<reference types="cypress">
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
//import { before } from "node:test";

const url = "https://www.randstad.se";

// before('handling sessions', () => {

//     Cypress.clearAllSessions()
// })

Given('I navigate to the Randstad homepage', () => {

    //cy.clearAllSessionStorage()

    cy
        .visit(url)
        .wait(3000)
        .get('#onetrust-accept-btn-handler')
        .click()

        .title()
        .should('not.be.empty')
        
}) 

When('I fill in a specific title {string}', (title) => {

    cy
        .wait(5000)
        .scrollTo('top')
        .wait(2000)
        .get('#search-keyword')
        //.wait(3000)
        //.invoke('removeAttr', 'target')
        .type(title)

})

When('I fill in a specific location {string}', (location) => {

    cy
        .get('#search-location')
        .wait(3000)
        //.invoke('removeAttr', 'target')
        .type(location)
        .type('{enter}')
})

When('I select a specific distance {string}', (distance) => {
   
    cy
        .get('#distance')
        //.invoke('removeAttr', 'target')
        .select(distance)
})

When('I press the Search button', () => {
  
    cy
        .get('#header-search-form > div > div > button')
        .click()
})

Then('The message {string} should be displayed', (message) => {

})

//</reference>