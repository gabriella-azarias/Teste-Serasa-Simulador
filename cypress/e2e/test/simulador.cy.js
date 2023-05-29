/// <reference types="cypress" />

import { selectors } from '../../fixtures/selectors.json';
import { scenario1 } from '../../fixtures/test-values.json';
import { scenario2 } from '../../fixtures/test-values.json';
import { scenario3 } from '../../fixtures/test-values.json';
import { scenario4 } from '../../fixtures/test-values.json';
import { minRangeValue } from '../../fixtures/test-values.json';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Simulador', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SERASA_SIMULADOR_URL'));
  });

  it('Cenario 1: Simulação de R$ 1.000 em 6 vezes valor esperado: 6x R$ 271,27', () => {
    // Definir o valor do R$ 1.000 no slider 
    cy.get(selectors.sliderRange)
      .invoke('val', scenario1.amount)
      .trigger('input');

    // Definir 6 parcelas no slider 
    cy.get(selectors.sliderRangeMonth)
      .invoke('val', scenario1.months)
      .trigger('input');
    
    // Validar se o slider trocou para 1.000
    cy.get(selectors.amount)
      .should('have.text', scenario1.expectedAmount);

    // Validar se o slider trocou para 6 parcelas
    cy.get(selectors.monthAmount)
      .should('have.text', scenario1.expectedMonthAmount);

    // Validar se o o valor experado é: 6x R$ 271,27
    cy.get(selectors.monthAmountOutput)
      .should('have.text', scenario1.expectedMonthAmountOutput);

    cy.get(selectors.priceSign)
      .should('have.text', scenario1.expectedPriceSign);

    cy.get(selectors.priceNumber)
      .should('have.text', scenario1.expectedPriceNumber);
  });

  it('Cenario 2: Simulação de R$ 4.000 em 12 vezes valor esperado: 12x R$ 478,49', () => {
    // Definir o valor do R$ 4.000 no slider 
    cy.get(selectors.sliderRange)
      .invoke('val', scenario2.amount)
      .trigger('input');

    // Definir 12 parcelas no slider 
      cy.get(selectors.sliderRangeMonth)
      .invoke('attr', 'min', minRangeValue)
      .invoke('val', scenario2.months)
      .trigger('input');

    // Validar se o slider trocou para 4.000
    cy.get(selectors.amount)
      .should('have.text', scenario2.expectedAmount);
   
    // Validar se o slider trocou para 12 parcelas
    cy.get(selectors.monthAmount)
      .should('have.text', scenario2.expectedMonthAmount);

    // Validar se o o valor experado é: 12x R$ 478,49
    cy.get(selectors.monthAmountOutput)
      .should('have.text', scenario2.expectedMonthAmountOutput);

    cy.get(selectors.priceSign)
      .should('have.text', scenario2.expectedPriceSign);

    cy.get(selectors.priceNumber)
      .should('have.text', scenario2.expectedPriceNumber);
  });

  //Esse teste irá falhar, pois os valores de entrada não irão gerar R$ 347,89 de parcela mensal
  it('Cenario 3: Simulação de R$6.000 em 24 vezes valor esperado: 24x R$ 347,89', () => {
    // Definir o valor do R$ 6.000 no slider 
    cy.get(selectors.sliderRange)
      .invoke('val', scenario3.amount)
      .trigger('input');

    // Definir 24 parcelas no slider 
    cy.get(selectors.sliderRangeMonth)
      .invoke('attr', 'min', minRangeValue)
      .invoke('val', scenario3.months)
      .trigger('input');

    // Validar se o slider trocou para 6.000
    cy.get(selectors.amount)
      .should('have.text', scenario3.expectedAmount);
   
    // Validar se o slider trocou para 24 parcelas
    cy.get(selectors.monthAmount)
      .should('have.text', scenario3.expectedMonthAmount);

    // Validar se o o valor experado é: 24x R$ 347,89
    cy.get(selectors.monthAmountOutput)
      .should('have.text', scenario3.expectedMonthAmountOutput);

    cy.get(selectors.priceSign)
      .should('have.text', scenario3.expectedPriceSign);

    cy.get(selectors.priceNumber)
      .should('have.text', scenario3.expectedPriceNumber);
  });

  //Esse é o teste que valida o valor final correto para os valores de entrada propostos no item 3.
  it('Cenario 4: Simulação de R$6.000 em 24 vezes valor esperado: 24x R$ 387,89', () => {
    // Definir o valor do R$ 6.000 no slider 
    cy.get(selectors.sliderRange)
      .invoke('val', scenario3.amount)
      .trigger('input');

    // Definir 24 parcelas no slider 
    cy.get(selectors.sliderRangeMonth)
      .invoke('attr', 'min', minRangeValue)
      .invoke('val', scenario3.months)
      .trigger('input');

    // Validar se o slider trocou para 6.000
    cy.get(selectors.amount)
      .should('have.text', scenario3.expectedAmount);
   
    // Validar se o slider trocou para 24 parcelas
    cy.get(selectors.monthAmount)
      .should('have.text', scenario3.expectedMonthAmount);

    // Validar se o o valor experado é: 24x R$ 387,89
    cy.get(selectors.monthAmountOutput)
      .should('have.text', scenario3.expectedMonthAmountOutput);

    cy.get(selectors.priceSign)
      .should('have.text', scenario3.expectedPriceSign);

    cy.get(selectors.priceNumber)
      .should('have.text', scenario4.expectedPriceNumber);
  });
});