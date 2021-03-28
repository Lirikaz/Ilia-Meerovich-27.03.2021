class MainPage3Obj {

    constructor() {
    }

    checkFlyOuts() {
        // Check first fly out
        cy.get('.services__Services-sc-1us4jnj-0.jwMwYJ')
            .find('div[data-aos="slide-left"]')
            .should('not.have.class', 'aos-animate')
        cy.get('.services__Services-sc-1us4jnj-0.jwMwYJ')
            .scrollIntoView()
            .wait(500)
        cy.get('.services__Services-sc-1us4jnj-0.jwMwYJ')
            .find('div[data-aos="slide-left"]')
            .should('have.class', 'aos-animate')

        // Check second fly out
        cy.get('.customers__Customers-fb9045-0.hYqFxv')
            .find('div[data-aos="slide-left"]').should('not.have.class', 'aos-animate')
        cy.get('.customers__Customers-fb9045-0.hYqFxv').scrollIntoView()
            .wait(500)
        cy.get('.customers__Customers-fb9045-0.hYqFxv')
            .find('div[data-aos="slide-left"]').should('have.class', 'aos-animate')

        // Check fly out scroll to top button
        cy.scrollTo('top')
        cy.get('a[data-scroll="true"]').should('not.have.class', 'huPgzm')
        cy.get('.portfolio__Portfolio-sc-80s039-0.bMmzri')
            .scrollIntoView()
            .wait(500)
        cy.get('a[data-scroll="true"]').should('have.class', 'huPgzm')

        // Check footer fly out
        cy.get('footer[id="footer"]').should('have.class', 'iCjXOW')
        cy.get('.contactUs__ContactContainer-sc-17vknwe-9.hcVIPz')
            .scrollIntoView()
            .wait(500)
        cy.get('footer[id="footer"]').should('not.have.class', 'iCjXOW')
    }
}

export default new MainPage3Obj();