//<reference types="cypress">
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
//import { before } from "node:test";

const url = "https://www.randstad.se";

// before('handling sessions', () => {

//     Cypress.clearAllSessions()
// })

Given('I navigate to the homepage', () => {

    //cy.clearAllSessionStorage()

    cy
        .visit(url)
        .wait(3000)
        .get('#onetrust-accept-btn-handler')
        .click()

        .title()
        .should('not.be.empty')
        
})

Given('I login using username and password', () => {

    cy.log('logging in')
})

When('I fill in a specific title {}', (title) => {

    cy
        .wait(5000)
        .scrollTo('top')
        .wait(2000)
        .get('#search-keyword')
        //.wait(3000)
        //.invoke('removeAttr', 'target')
        .type(title)

})

When('I fill in a specific location {}', (location) => {

    cy
        .get('#search-location')
        .wait(3000)
        //.invoke('removeAttr', 'target')
        .type(location)
        .type('{enter}')
})

When('I select a specific distance {}', (distance) => {
   
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

Then('The message {} should be displayed', (message) => {

    cy
        .log('message is displayed')
})

//---------------------------------------------------------------------//

When('I press the Free positions tab', () => {

    cy
        //.get('#block-main-navigation > div > ul > li:nth-child(1) > a')//('div.navigation > div > ul > li:nth-child(1)')
        //#block-main-navigation > div > ul > li.navigation__menu-item.navigation__menu-item--active > a
        .contains('lediga jobb')
        .should('contain', 'lediga jobb')
        .click()
})

Then('The new page title should be {}', (title) => {

    cy
        .title()
        .should('eq', title) //temporarily
})

Then('There should be a header containing {}', (contents) => {

    cy
        .wait(3000)
        .get('#sortBar > div > div > div > h1')//('.wrapper > div > h1')
        //.should('not.be.empty')
        // .its('text')
        // .should('contain', contents)
})

//</reference>