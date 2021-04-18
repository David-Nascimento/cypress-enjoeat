describe('Deve ver a lista de restaurandes', () => {

    before(() => {
        cy.visit('http://localhost:3000/')
    })

    //Pulando o teste
    it.skip('Valida Tela de apresentação', () => {
        
        //lida logo
        cy.title().should('be.equals', 'Enjoeat | Angular')

        // Valida o paragrafo
        cy.get('p').should('contain', 'Delivery pra qualquer fome:')

        //Botao Restaurante
        cy.get('.btn').should('contain', 'Restaurante')

        // barra topo
        cy.get('.nav > :nth-child(1) > a').should('have.text', 'Restaurantes')
        cy.get(':nth-child(2) > a').should('have.text', 'Sobre')
    });

})