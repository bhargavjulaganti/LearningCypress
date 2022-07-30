describe('google spec', () => {
    it('open google and enter test', () => {
        cy.visit("https://www.google.com/")

        cy.get('.gLFyf.gsfi')
            .type('My first cypress test')
    })


    it('Validate text on google home page', () => {
        cy.visit("https://www.google.com/")

        cy.get('#gbqfbb')
            .should('value', "I'm Feeling Lucky")
    })


    it('create alias', () => {
        cy.visit("https://www.google.com/")

        cy.get('.gLFyf.gsfi')
            .as('googleHomePageInputBox')

        cy.get('@googleHomePageInputBox')
            .type('Entering text using alias')
    })
})