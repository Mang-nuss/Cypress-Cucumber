/// <reference types="cypress" />
import { When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";

// Before('before clause', () => {
//     cy.log('executes before each scenario or test.')
// })

Before({ tags:"@tabs" }, () => {
    cy.log('executes the Tabs tag')
})