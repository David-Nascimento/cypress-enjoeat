Feature: Deve acessa a pagina inicial
  Eu como um usuario
  Quero acessar o restaurante Bread & Bakery
  Para fechar um pedido

  Scenario: Valida Tela de apresentação
    Given que eu acesso a pagina de apresentação
    When acessar o restaurante Bread & Bakery
    Then a pagina do restaurante é carregada
    And eu fecho um pedido