/ <reference types="cypress" />

class Base_PO {
    //baseUrl = "https://www.randstad.se";

    navigate(path) {
        cy.visit(baseUrl + path);
    }
}

export default