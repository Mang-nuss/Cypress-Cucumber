/// <reference types="cypress" />

class Base_PO {
    //baseUrl = "https://www.randstad.se";

    navigate(path) {
        //cy.visit(baseUrl + path);
        cy.fixture("config.json").then((data) => {

            cy.visit(data.baseUrl + path)
        })
    }
}

export default Base_PO;