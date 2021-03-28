/// <reference types="cypress"/>
import utils from "../utils/Utils"

describe('Testing main page 4th scenario', function() {

    before(function () {
        cy.visitApp();
    })

    it('Testing buttons', function () {
        utils.mainPage4.checkButtons();
    })
})