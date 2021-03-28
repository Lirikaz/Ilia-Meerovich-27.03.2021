class MainPage4Obj {

    constructor() {
    }

    checkButtons() {
        // WhatsApp button
        cy.get('a.callUsWhatsapp__BtnWhatsapp-rkzbui-0.cjunrQ')
            .should('have.prop', 'href','https://api.whatsapp.com/send?phone=972544945333')
        cy.get('.contactUs__ContactContainer-sc-17vknwe-9.hcVIPz')
            .scrollIntoView()
            .wait(500)
        // Main site button
        cy.get('a.socialMediaBar__ImgSocial-sc-1ry1db0-2.bXWGqN')
            .should('have.prop', 'href', 'https://herolo.co.il/?lang=he')
        // Facebook button
        cy.get('a.socialMediaBar__ImgSocial-sc-1ry1db0-2.eufMcD')
            .should('have.prop', 'href', 'https://www.facebook.com/Herolofrontend')
        // WhatsApp button
        cy.get('a.socialMediaBar__ImgSocial-sc-1ry1db0-2.jOgeKm')
            .should('have.prop', 'href', 'https://api.whatsapp.com/send?phone=972544945333')
        // LinkedIn button
        cy.get('a.socialMediaBar__ImgSocial-sc-1ry1db0-2.gcUHBk')
            .should('have.prop', 'href', 'https://www.linkedin.com/company/herolo/')
        // E-mail button
        cy.get('a.commun__ContactText-zi6nvq-7.kTeJTM')
            .should('have.prop', 'href', 'mailto:mati@herolo.co.il')
    }
}

export default new MainPage4Obj();