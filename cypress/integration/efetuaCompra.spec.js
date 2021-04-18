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
        cy.contains('Faded Short Sleeve T-shirts')
        //valida o valor do produto
        cy.contains('$16.51')
        //visualizar item
        cy.get('.icon-eye-open').click()

        //fecha a visualizacao do item
        cy.get('.fancybox-item').click()

        //Adiciona ao carrinho
        cy.get('.ajax_add_to_cart_button > span').click()

        //verifica mensagem de produto adicionado ao carrinho
        cy.contains('Product successfully added to your shopping cart')

        cy.get('.cross').click()

        //move o scroll para top da pagina
        cy.scrollTo(500, 0)
    })

})