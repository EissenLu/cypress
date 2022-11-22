describe('Überprüfung der Loginseite', () => {
    
    it('Mit Cypress anmelden', () =>{
        cy.visit('/login.html');

        cy.get('input')
            .first()
            .type('test@mail.de')
        cy.pause()
        cy.get('input')
            .eq(1)
            .type('1234')
        cy.pause()

        cy.get('input')
            .eq(2)
            .check()
        cy.pause()

        cy.get('#signIn')
            .click()
    })
})