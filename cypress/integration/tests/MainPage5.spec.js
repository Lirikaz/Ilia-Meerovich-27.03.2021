/// <reference types="cypress"/>
import utils from "../utils/Utils"

describe('Testing main page 5th scenario', function() {

    before(function () {
        cy.visitApp();
    })

    it('Testing swipes', function () {
        utils.mainPage5.checkSwipes();
    })
})