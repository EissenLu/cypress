describe('Demonstration der Funktionen ', () => {
    
    before(()=>{
        cy.visit('/login.html')
    })

    beforeEach(()=>{
        cy.visit('')
    })

    it('Elemente nach Elementnamen auswählen', ()=>{

        cy.get('h2')
            .first()
            .should('exist')
            .and('be.visible')
            .and('contain.text', 'Willkommen zur Cypress Demo!')
    })

    it('Elemente nach ID- oder Klassennamen auswählen', ()=>{

        cy.get('#feature1')
            .find('h2')
            .should('exist')
            .and('be.visible')
            .and('contain.text', 'Feature 1')
        
        cy.get('.featureClass')
            .each(obj =>{
                cy.wrap(obj)
                    .find('h2')
                    .should('exist')
                    .and('be.visible')
            })
    })

    it('Cypress abreibetet auf dem DOM', ()=>{
        cy.get('#feature1')
            .find('p')
            .should('exist')
            .and('be.visible')
            .and('contain.text', 'Cypress')
    })

    it('Custom-Commands erstellen', () =>{
        cy.header()

        cy.get('#login')
            .click()
        cy.url()
            .should('include', '/login.html')
    
        cy.header()

    })

    it('Responsive Design', () =>{
        cy.viewport('macbook-16')
        cy.wait(800)
        cy.viewport('macbook-13')
        cy.wait(800)
        cy.viewport('ipad-2')
        cy.wait(800)
        cy.viewport('iphone-8')
        cy.wait(800)
    })

    it('Werte auslesen', ()=>{
        cy.visit('/example.html')

        cy.get('.card-body')
            .find('h1')
            .eq(1)
            .invoke('text')
            .then(smaller =>{
                const firstPrice = parseInt(smaller.slice(1,3))
                cy.log(firstPrice)
                cy.pause()
                cy.get('.card-body')
                    .find('h1')
                    .eq(2)
                    .invoke('text')
                    .then(bigger =>{
                        const secondPrice = parseInt(bigger.slice(1,3))
                        cy.log(secondPrice)
                        cy.pause()
                        expect(secondPrice).to.be.gte(firstPrice)
            })
            })
    })

    afterEach('', ()=>{

    })

    after('', ()=>{
        cy.visit('')
        cy.viewport('macbook-16')
    } )
})