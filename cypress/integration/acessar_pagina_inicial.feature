Feature: Deve acessa a pagina inicial
  Eu como um usuario
  Quero acessar a pagina inicial do restaurante
  E visualizar o nome e descrição do restaurante

  Scenario: Acesso pagina inicial
    Given que eu acesso a pagina inicial
    Then eu vejo o nome do restaurant
    And a descrição

