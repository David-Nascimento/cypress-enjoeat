/// <reference types="cypress" />

describe('Deve ver a lista de restaurandes', () => {

    before(() => {
        cy.visit('/')
    })

    beforeEach(() => {
        cy.reload()
    })

    //Pulando o teste
    it('Valida Tela de apresentação', () => {

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

    it('Deve acessar o restaurante Bread & Bakery', () => {
        cy.get('.btn').click()

        cy.get('h1').should('exist')

        //Deve validar o restaurante
        cy.get(':nth-child(1) > mt-restaurant > .restaurant > .place-info-box').then(rest => {
            expect(rest).to.be.contain('Bread & Bakery')
            expect(rest).to.be.contain('4.9')
            expect(rest).to.be.contain('Padaria')
            expect(rest).to.be.contain('25 minutos')
        }).click()


        //Validar o click
        cy.request('/api/restaurants/bread-bakery').then((response) => {
            expect(response.status).to.eq(200)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })

        //Valida a tela de menu
        cy.request('/api/restaurants/bread-bakery/menu').then((response) => {
            expect(response.status).to.eq(200)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })

        //Deve validar os detalhes do restaurante
        cy.get('#detail').then(detail => {
            expect(detail).to.be.contain('Categoria')
            expect(detail).to.be.contain('Padaria')
            expect(detail).to.be.contain('Descrição')
            expect(detail).to.be.contain('A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães.')
            expect(detail).to.be.contain('Compre e confira.')
            expect(detail).to.be.contain('Horários')
            expect(detail).to.be.contain('Funciona de segunda à sexta, de 8h às 23h')
        })

        //Deve validar um item e adicionar ao carrinho
        cy.get(':nth-child(1) > .menu-item-info-box').then(cupCake => {
            expect(cupCake).to.be.contain('Cup Cake')
            expect(cupCake).to.be.contain('Cup Cake recheado de Doce de Leite')
            expect(cupCake).to.have.length(1)
            expect(cupCake).to.be.contain('Adicionar')
        }).find('.add-to-cart').click().should('have.text', ' Adicionar')

        cy.get('.snackbar').should('contain', 'Você adicionou o item Cup Cake')

        cy.get('#shopping-cart > .box-body').then(carrinho => {
            expect(carrinho).to.not.be.empty
        })

        cy.get('#shopping-cart > .box-body').then(itemCarrinho => {
            expect(itemCarrinho).to.be.contain('(1x) Cup Cake')
            expect(itemCarrinho).to.have.length(1)
            expect(itemCarrinho).to.be.contain('Total:')
            expect(itemCarrinho).to.be.length(1)
        })

        //Fecha pedido
        cy.get('.btn-success').click()
    });

})