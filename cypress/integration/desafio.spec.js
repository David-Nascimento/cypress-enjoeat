/// <reference types="cypress" />

describe('Desafio aula prompt', () => {

    before(() => {
        cy.visit('/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Deve preencher o formulario', () => {
        const stub = cy.stub().as('alert')
        cy.on('window:alert', stub)
        cy.get('#formCadastrar').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio')
        })

        cy.get('#formNome').type('David')
        cy.get('#formCadastrar').click().then(() => {
            expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio')
        })

        cy.get('[data-cy=dataSobrenome]').type('Halison')
        cy.get('#formCadastrar').click().then(() => {
            expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio')
        })

        cy.get('#formSexoMasc').click()
        cy.get('#formCadastrar').click()

        cy.get('#resultado > :nth-child(1)').should('have.text', 'Cadastrado!')
    });

    it('Interacao com iFrame', () => {
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield')
                .type('funciona?')
                .should('have.value', 'funciona?')
        })
    });

    it('should run performance audits using custom thresholds', () => {
        cy.lighthouse('/cypress/componentes.html').as('results')
        
        const customThresholds = {
            performance: 50,
            accessibility: 50,
            seo: 70,
            'first-contentful-paint': 2000,
            'largest-contentful-paint': 3000,
            'cumulative-layout-shift': 0.1,
            'total-blocking-time': 500,
        };

        const desktopConfig = {
            formFactor: 'desktop',
            screenEmulation: { disabled: true },
        };

        cy.lighthouse(customThresholds, desktopConfig);
    });
    
})