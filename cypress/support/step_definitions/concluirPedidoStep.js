// <reference types="cypress" />
// Given When Then And, But

import page from '../pages/concluirPedidoPage';
import utils from '../utils'

Given("que eu acesso a pagina de apresentação", () => {
    cy.visit('/')
    page.paginaInicial()
})

When('acessar o restaurante Bread & Bakery', () => {
    page.restauranteBreadBakery()
})

Then('a pagina do restaurante é carregada', () => {
    page.pageBreadBakery()
})

And('eu fecho um pedido', () => {
    page.fecharPedido()
    utils.screenshot()
})