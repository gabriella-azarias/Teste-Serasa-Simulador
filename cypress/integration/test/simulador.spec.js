/// <reference types="cypress" />


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


describe('Simulador', () => {

  beforeEach(() => {
      cy.visit('https://www.serasa.com.br/ecred/simulador');
  })

  it('Cenario 1: Simulação de R$ 1.000 em 6 vezes valor esperado: 6x R$ 271,27', () => {
      // Definir o valor do R$ 1.000 no slider 
      cy.get('#slider-range').invoke('val', 1000).trigger('input').click();

      // Definir 6 parcelar no slider 
      cy.get('#slider-range-month').invoke('val', 6).trigger('input').click();

      // Validar 6 meses 
      cy.get('#month-amount-output').invoke('text').then((textoDoCampo) => {
          const valorEsperado = "6x";           
          expect(textoDoCampo).to.eq(valorEsperado);    
      })

      // Validar valor da parcela 
      cy.get('#loan-amount-output').invoke('text').then((textoDoCampo) => {
          const valorEsperado = "R$ 271,27";  
          expect(textoDoCampo).to.eq(valorEsperado);
      })

     })

 
  
})