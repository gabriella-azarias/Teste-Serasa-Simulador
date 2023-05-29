/// <reference types="cypress" />

const selectors = {
    sliderRange: '#slider-range',
    sliderRangeMonth: '#slider-range-month',
    amount: '#amount',
    monthAmount: '#month-amount',
    monthAmountOutput: '#month-amount-output',
    priceSign: '#price-sign',
    priceNumber: '#price-number',
  };
  
  const values = {
    minRangeValue: '0',
    scenario1: {
      amount: 1000,
      months: 6,
      expectedAmount: 'R$ 1.000,00',
      expectedMonthAmount: '6 meses',
      expectedMonthAmountOutput: '6x',
      expectedPriceSign: 'R$',
      expectedPriceNumber: '271,27',
    },
    scenario2: {
      amount: 4000,
      months: 12,
      expectedAmount: 'R$ 4.000,00',
      expectedMonthAmount: '12 meses',
      expectedMonthAmountOutput: '12x',
      expectedPriceSign: 'R$',
      expectedPriceNumber: '478,49',
    },
    scenario3: {
      amount: 6000,
      months: 24,
      expectedAmount: 'R$ 6.000,00',
      expectedMonthAmount: '24 meses',
      expectedMonthAmountOutput: '24x',
      expectedPriceSign: 'R$',
      expectedPriceNumber: '347,89',
    },
    scenario4: {
      amount: 6000,
      months: 24,
      expectedAmount: 'R$ 6.000,00',
      expectedMonthAmount: '24 meses',
      expectedMonthAmountOutput: '24x',
      expectedPriceSign: 'R$',
      expectedPriceNumber: '387,89',
    },
  };
  
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  
  describe('Simulador', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('SERASA_SIMULADOR_URL'));
    });
  
    it('Cenario 1: Simulação de R$ 1.000 em 6 vezes valor esperado: 6x R$ 271,27', () => {
      // Definir o valor do R$ 1.000 no slider 
      cy.get(selectors.sliderRange)
        .invoke('val', values.scenario1.amount)
        .trigger('input');
  
      // Definir 6 parcelas no slider 
      cy.get(selectors.sliderRangeMonth)
        .invoke('val', values.scenario1.months)
        .trigger('input');
      
      // Validar se o slider trocou para 1.000
      cy.get(selectors.amount)
        .should('have.text', values.scenario1.expectedAmount);
  
      // Validar se o slider trocou para 6 parcelas
      cy.get(selectors.monthAmount)
        .should('have.text', values.scenario1.expectedMonthAmount);
  
      // Validar se o o valor experado é: 6x R$ 271,27
      cy.get(selectors.monthAmountOutput)
        .should('have.text', values.scenario1.expectedMonthAmountOutput);
  
      cy.get(selectors.priceSign)
        .should('have.text', values.scenario1.expectedPriceSign);
  
      cy.get(selectors.priceNumber)
        .should('have.text', values.scenario1.expectedPriceNumber);
    });
  
    it('Cenario 2: Simulação de R$ 4.000 em 12 vezes valor esperado: 12x R$ 478,49', () => {
      // Definir o valor do R$ 4.000 no slider 
      cy.get(selectors.sliderRange)
        .invoke('val', values.scenario2.amount)
        .trigger('input');
  
      // Definir 12 parcelas no slider 
        cy.get(selectors.sliderRangeMonth)
        .invoke('attr', 'min', values.minRangeValue)
        .invoke('val', values.scenario2.months)
        .trigger('input');
  
      // Validar se o slider trocou para 4.000
      cy.get(selectors.amount)
        .should('have.text', values.scenario2.expectedAmount);
     
      // Validar se o slider trocou para 12 parcelas
      cy.get(selectors.monthAmount)
        .should('have.text', values.scenario2.expectedMonthAmount);
  
      // Validar se o o valor experado é: 12x R$ 478,49
      cy.get(selectors.monthAmountOutput)
        .should('have.text', values.scenario2.expectedMonthAmountOutput);
  
      cy.get(selectors.priceSign)
        .should('have.text', values.scenario2.expectedPriceSign);
  
      cy.get(selectors.priceNumber)
        .should('have.text', values.scenario2.expectedPriceNumber);
    });
  
    //Esse teste irá falhar, pois os valores de entrada não irão gerar R$ 347,89 de parcela mensal
    it('Cenario 3: Simulação de R$6.000 em 24 vezes valor esperado: 24x R$ 347,89', () => {
      // Definir o valor do R$ 6.000 no slider 
      cy.get(selectors.sliderRange)
        .invoke('val', values.scenario3.amount)
        .trigger('input');
  
      // Definir 24 parcelas no slider 
      cy.get(selectors.sliderRangeMonth)
        .invoke('attr', 'min', values.minRangeValue)
        .invoke('val', values.scenario3.months)
        .trigger('input');
  
      // Validar se o slider trocou para 6.000
      cy.get(selectors.amount)
        .should('have.text', values.scenario3.expectedAmount);
     
      // Validar se o slider trocou para 24 parcelas
      cy.get(selectors.monthAmount)
        .should('have.text', values.scenario3.expectedMonthAmount);
  
      // Validar se o o valor experado é: 24x R$ 347,89
      cy.get(selectors.monthAmountOutput)
        .should('have.text', values.scenario3.expectedMonthAmountOutput);
  
      cy.get(selectors.priceSign)
        .should('have.text', values.scenario3.expectedPriceSign);
  
      cy.get(selectors.priceNumber)
        .should('have.text', values.scenario3.expectedPriceNumber);
    });
  
    //Esse é o teste que valida o valor final correto para os valores de entrada propostos no item 3.
    it('Cenario 4: Simulação de R$6.000 em 24 vezes valor esperado: 24x R$ 387,89', () => {
      // Definir o valor do R$ 6.000 no slider 
      cy.get(selectors.sliderRange)
        .invoke('val', values.scenario4.amount)
        .trigger('input');
  
      // Definir 24 parcelas no slider 
      cy.get(selectors.sliderRangeMonth)
        .invoke('attr', 'min', values.minRangeValue)
        .invoke('val', values.scenario4.months)
        .trigger('input');
  
      // Validar se o slider trocou para 6.000
      cy.get(selectors.amount)
        .should('have.text', values.scenario4.expectedAmount);
     
      // Validar se o slider trocou para 24 parcelas
      cy.get(selectors.monthAmount)
        .should('have.text', values.scenario4.expectedMonthAmount);
  
      // Validar se o o valor experado é: 24x R$ 387,89
      cy.get(selectors.monthAmountOutput)
        .should('have.text', values.scenario4.expectedMonthAmountOutput);
  
      cy.get(selectors.priceSign)
        .should('have.text', values.scenario4.expectedPriceSign);
  
      cy.get(selectors.priceNumber)
        .should('have.text', values.scenario4.expectedPriceNumber);
    });
  });''