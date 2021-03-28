/// <reference types="cypress"/>
import utils from "../utils/Utils"

describe('Testing main page 1st scenario', function() {

    before(function () {
        cy.visitApp();
        cy.fixture('config.json').as('config');
    })

    it('Send form', function () {
        utils.mainPage1.fillInForm(this.config);
        utils.mainPage1.submit();
    })
})