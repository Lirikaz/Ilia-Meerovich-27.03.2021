/// <reference types="cypress"/>
import utils from "../utils/Utils"

describe('Testing main page 2nd scenario', function() {

    before(function () {
        cy.visitApp();
        cy.fixture('config.json').as('config');
    })

    it('Send form', function () {
        utils.mainPage2.fillInForm(this.config);
        utils.mainPage2.submit();
    })
})