describe('Intercept', () => {
    
    it('My First test', () =>{
        cy.visit('')

        cy.intercept('GET', '/api-url',
            { fixture: 'intercept.json'})
            .as('example')
        
        cy.intercept('/api-url',
        {
            statusCode: 404,
            body: null,
            headers: {
                'x-not-found': 'true'
            }
        }).as('not-available')
    })
})