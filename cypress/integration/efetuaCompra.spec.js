// <reference types="cypress" />

describe('Vendas', () => {

    it('deve mover um item para o carrinho', () => {
        cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category')
       
        cy.title().should('be.equals', 'Women - My Store')

        cy.get('.sf-menu > :nth-child(3) > a').click()
        
        //move o scroll ate a imagem
        cy.scrollTo(0, 500)
        cy.get('.product_img_link > .replace-2x')

        //Valida o texto do produto
        cy.get('.right-block > h5 > .product-name').invoke('text').then(($value) => {
            cy.log($value)
            expect($value).to.equal('\n\t\t\t\t\t\t\tFaded Short Sleeve T-shirts\n\t\t\t\t\t\t')
        })
        //valida o valor do produto
        cy.get('.right-block > .content_price > .price').invoke('text').then(($price) => {
            cy.log($price)
            expect($price).to.equal('\n\t\t\t\t\t\t\t\t$16.51\t\t\t\t\t\t\t')
        })
        //visualizar item
        cy.get('.icon-eye-open').click()

        //fecha a visualizacao do item
        cy.get('.fancybox-item').click()

        //Adiciona ao carrinho
        cy.get('.ajax_add_to_cart_button > span').click()

        //verifica mensagem de produto adicionado ao carrinho
        cy.get('.layer_cart_product > h2').invoke('text').then(($cart) => {
            cy.log($cart)
            expect($cart).to.equal('\n\t\t\t\t\tProduct successfully added to your shopping cart\n\t\t\t\t')
        })

        cy.get('.cross').click()

        //move o scroll para top da pagina
        cy.scrollTo(500, 0)
    })

})