/// <reference types="cypress" />

describe('deve validar login', () => {

    before(() => {
    })

    beforeEach(() => {

    })

    it('Create account', () => {
        cy.request({
            method: 'POST',
            url: 'http://barrigarest.wcaquino.me/signin',
            body: {
                email: 'tester@testes.com',
                redirecionar: false,
                senha: '123456'
            }
        }).its('body.token').should('not.be.empty')
            .then(token => {
                cy.request({
                    url: 'http://barrigareact.wcaquino.me/contas',
                    method: 'POST',
                    headers: { Authorization: `JWT ${token}` },
                    body: {
                        nome: 'Conta via rest'
                    }
                }).as('response')
            })

        cy.wait('@response'), then(res => {
            expect(res.status).to.be.equal(200)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome', 'Conta via rest')
        })

    })

    it('should run performance audits using custom thresholds', () => {
        cy.visit('http://barrigarest.wcaquino.me/signin');
        cy.lighthouse('http://barrigarest.wcaquino.me/signin').as('results')
        
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