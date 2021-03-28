class MainPage1Obj {

    constructor() {
    }

    fillInForm(config) {
        // Input name
        cy.get('div.Footer__InputDiv-sc-159s1ql-4.gtivLA')
            .find('input[name="name"]')
            .type(config.name)
            .should('have.value', config.name)
        // Input e-main
        cy.get('div.Footer__InputDiv-sc-159s1ql-4.gtivLA')
            .find('input[name="email"]')
            .type(config.email)
            .should('have.value', config.email)
        // Input phone
        cy.get('div.Footer__InputDiv-sc-159s1ql-4.gtivLA')
            .find('input[name="phone"]')
            .type(config.phone)
            .should('have.value', config.phone)
    }

    submit() {
        // Press submit button
        cy.get('button.Footer__Button-sc-159s1ql-7.kOOAFW')
            .contains('שליחה')
            .click()
        // Assert redirect after submitting
        cy.location('pathname', {timeout:20000}).should('eq', '/thank-you/')
        expect(cy.get('h1.thankYou__title-avz2fr-5.gsaDIh').contains('תודה!'))
    }
}

export default new MainPage1Obj();