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

    it('Test1', ()=>{

    })

    it('Test2', ()=>{
        
    })

    it('Test3', ()=>{
        
    })

    it('Test4', ()=>{
        
    })

    it('Test5', ()=>{
        
    })
})