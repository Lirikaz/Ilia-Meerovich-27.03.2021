class MainPage5Obj {

    constructor() {
    }

    checkSwipes() {
        // Check first form, first tab
        cy.get('.portfolio__Portfolio-sc-80s039-0.bMmzri')
            .scrollIntoView()
        expect(cy.get('div.slick-slide.slick-active.slick-current')
            .find('img')
            .should('have.prop', 'src', 'https://automation.herolo.co.il/static/niagara-page-ac1d588d72887249ba2a134bbfbb3e21.png'))
        // 2nd tab
        cy.get('.portfolio__Portfolio-sc-80s039-0.bMmzri')
            .find('ul.slick-dots > :nth-child(2) > div.commun__Paging-zi6nvq-3.jZSvee').click({force: true})
            .wait(1000)
        expect(cy.get('div.slick-slide.slick-active.slick-current')
            .find('img')
            .should('have.prop', 'src', 'https://automation.herolo.co.il/static/dlite-5c4b46256ad4032e0515a37a5816d7d5.png'))
        // 3rd tab
        cy.get('.portfolio__Portfolio-sc-80s039-0.bMmzri')
            .find('ul.slick-dots > :nth-child(3) > div.commun__Paging-zi6nvq-3.jZSvee').click({force: true})
            .wait(1000)
        expect(cy.get('div.slick-slide.slick-active.slick-current')
            .find('img')
            .should('have.prop', 'src', 'https://automation.herolo.co.il/static/dreamad-9ed270c56420ac89200529b2a642452b.png'))
        // 4th tab
        cy.get('.portfolio__Portfolio-sc-80s039-0.bMmzri')
            .find('ul.slick-dots > :nth-child(4) > div.commun__Paging-zi6nvq-3.jZSvee').click({force: true})
            .wait(1000)
        expect(cy.get('div.slick-slide.slick-active.slick-current')
            .find('img')
            .should('have.prop', 'src', 'https://automation.herolo.co.il/static/evolution-energy-5a9c46691008e63f7d3d4f45c584413b.png'))
        // 5th tab
        cy.get('.portfolio__Portfolio-sc-80s039-0.bMmzri')
            .find('ul.slick-dots > :nth-child(5) > div.commun__Paging-zi6nvq-3.jZSvee').click({force: true})
            .wait(1000)
        expect(cy.get('div.slick-slide.slick-active.slick-current')
            .find('img')
            .should('have.prop', 'src', 'https://automation.herolo.co.il/static/autolabs-a03363e432efb208dad4331e30d02bd9.png'))

        // Check second form, first tab
        cy.get('.customers__Customers-fb9045-0.hYqFxv')
            .scrollIntoView()
        cy.get('.customers__Customers-fb9045-0.hYqFxv')
            .find('ul.slick-dots > :nth-child(1) > div.commun__Paging-zi6nvq-3.jZSvee').click()
            .wait(500)
        // 2nd tab
        cy.get('.customers__Customers-fb9045-0.hYqFxv')
            .find('ul.slick-dots > :nth-child(2) > div.commun__Paging-zi6nvq-3.jZSvee').dblclick({force: true})
            .wait(500)
        // 3rd tab
        cy.get('.customers__Customers-fb9045-0.hYqFxv')
            .find('ul.slick-dots > :nth-child(3) > div.commun__Paging-zi6nvq-3.jZSvee').click({force: true})
            .wait(500)
        // 4th tab
        cy.get('.customers__Customers-fb9045-0.hYqFxv')
            .find('ul.slick-dots > :nth-child(3) > div.commun__Paging-zi6nvq-3.jZSvee').click({force: true})
            .wait(500)
    }
}

export default new MainPage5Obj();