/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  
  describe('Simulador', () => {
    beforeEach(() => {
      cy.visit('https://www.serasa.com.br/ecred/simulador');
    });
  
    it('Cenario 1: Simulação de R$ 1.000 em 6 vezes valor esperado: 6x R$ 271,27', () => {
      // Definir o valor do R$ 1.000 no slider 
      cy.get('#slider-range')
        .invoke('val', 1000)
        .trigger('input')
        .click();
  
      // Definir 6 parcelas no slider 
      cy.get('#slider-range-month')
        .invoke('val', 6)
        .trigger('input')
        .click();
      
      // Validar se o slider trocou para 1.000
      cy.get('#amount')
        .should('have.text', 'R$ 1.000,00');
  
      // Validar se o slider trocou para 6 parcelas
      cy.get('#month-amount')
        .should('have.text', '6 meses');
  
      // Validar se o o valor experado é: 6x R$ 271,27
      cy.get('#month-amount-output')
        .should('have.text', '6x');
  
      cy.get('#price-sign')
        .should('have.text', 'R$');
  
      cy.get('#price-number')
        .should('have.text', '271,27');
    });
  
    it('Cenario 2: Simulação de R$ 4.000 em 12 vezes valor esperado: 12x R$ 478,49', () => {
      // Definir o valor do R$ 4.000 no slider 
      cy.get('#slider-range')
        .invoke('val', 4000)
        .trigger('input')
        .click();
  
      // Definir 12 parcelas no slider 
      cy.get('#slider-range-month')
        .invoke('attr', 'min', '0')
        .invoke('val', 12)
        .trigger('input')
        .click();
  
      // Validar se o slider trocou para 4.000
      cy.get('#amount')
        .should('have.text', 'R$ 4.000,00');
     
      // Validar se o slider trocou para 12 parcelas
      cy.get('#month-amount')
        .should('have.text', '12 meses');
  
      // Validar se o o valor experado é: 12x R$ 478,49
      cy.get('#month-amount-output')
        .should('have.text', '12x');
  
      cy.get('#price-sign')
        .should('have.text', 'R$');
  
      cy.get('#price-number')
        .should('have.text', '478,49');
    });
  
    //Esse teste irá falhar, pois os valores de entrada não irão gerar R$ 347,89 de parcela mensal
    it('Cenario 3: Simulação de R$6.000 em 24 vezes valor esperado: 24x R$ 347,89', () => {
      // Definir o valor do R$ 6.000 no slider 
      cy.get('#slider-range')
        .invoke('val', 6000)
        .trigger('input')
        .click();
  
      // Definir 24 parcelas no slider 
      cy.get('#slider-range-month')
        .invoke('attr', 'min', '0')
        .invoke('val', 24)
        .trigger('input')
        .click();
  
      // Validar se o slider trocou para 6.000
      cy.get('#amount')
        .should('have.text', 'R$ 6.000,00');
     
      // Validar se o slider trocou para 24 parcelas
      cy.get('#month-amount')
        .should('have.text', '24 meses');
  
      // Validar se o o valor experado é: 24x R$ 347,89
      cy.get('#month-amount-output')
        .should('have.text', '24x');
  
      cy.get('#price-sign')
        .should('have.text', 'R$');
  
      cy.get('#price-number')
        .should('have.text', '347,89');
    });
  
    //Esse é o teste que valida o valor final correto para os valores de entrada propostos no item 3.
    it('Cenario 4: Simulação de R$6.000 em 24 vezes valor esperado: 24x R$ 387,89', () => {
      // Definir o valor do R$ 6.000 no slider 
      cy.get('#slider-range')
        .invoke('val', 6000)
        .trigger('input')
        .click();
  
      // Definir 24 parcelas no slider 
      cy.get('#slider-range-month')
        .invoke('attr', 'min', '0')
        .invoke('val', 24)
        .trigger('input')
        .click();
  
      // Validar se o slider trocou para 6.000
      cy.get('#amount')
        .should('have.text', 'R$ 6.000,00');
     
      // Validar se o slider trocou para 24 parcelas
      cy.get('#month-amount')
        .should('have.text', '24 meses');
  
      // Validar se o o valor experado é: 24x R$ 387,89
      cy.get('#month-amount-output')
        .should('have.text', '24x');
  
      cy.get('#price-sign')
        .should('have.text', 'R$');
  
      cy.get('#price-number')
        .should('have.text', '387,89');
    });
  });