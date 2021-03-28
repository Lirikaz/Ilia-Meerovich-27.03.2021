/// <reference types="cypress"/>
import utils from "../utils/Utils"

describe('Testing main page 3rd scenario', function() {

    before(function () {
        cy.visitApp();
    })

    it('Testing fly outs', function () {
        utils.mainPage3.checkFlyOuts();
    })
})