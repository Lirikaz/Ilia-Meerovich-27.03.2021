class MainPage2Obj {

    constructor() {
    }

    fillInForm(config) {
        cy.get('.contactUs__RightContainer-sc-17vknwe-7.fJIRGu').scrollIntoView()
        // Input name
        cy.get('form[id="section-inputs"]')
            .find('input[id="name"]')
            .type(config.name,{force:true})
            .should('have.value', config.name)
        // Input e-mail
        cy.get('form[id="section-inputs"]')
            .find('input[id="email"]')
            .type(config.email,{force:true})
            .should('have.value', config.email)
        // Input phone number
        cy.get('form[id="section-inputs"]')
            .find('input[id="telephone"]')
            .type(config.phone,{force:true})
            .should('have.value', config.phone)
        // Input company
        cy.get('form[id="section-inputs"]')
            .find('input[id="company"]')
            .type(config.company,{force:true})
            .should('have.value', config.company)
    }

    submit() {
        // Press submit button
        cy.get('a[type="button"]')
            .contains('דברו איתנו')
            .click({force:true})
        // Assert redirect after submitting
        cy.location('pathname', {timeout:20000}).should('eq', '/thank-you/')
        expect(cy.get('h1.thankYou__title-avz2fr-5.gsaDIh').should('contain', 'תודה!'))
    }
}

export default new MainPage2Obj();