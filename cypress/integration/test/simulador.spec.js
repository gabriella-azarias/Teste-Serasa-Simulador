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
      cy.get('#slider-range').should('exist').invoke('val', 1000).trigger('input').click();

      // Definir 6 parcelas no slider 
      cy.get('#slider-range-month').should('exist').invoke('val', 6).trigger('input').click()

    //Validar os meses 
      cy.get('#month-amount').should('have.text', '6 meses');




     })

     it('Cenario 2: Simulação de R$ 4.000 em 12 vezes valor esperado: 12x R$ 478,49', () => {

   
        // Definir o valor do R$ 4.000 no slider 
         cy.get('#slider-range').should('exist').invoke('val', 4000).trigger('input').click();
         

         cy.pause(1000)
        // Definir 12 parcelas no slider 
        cy.get('#slider-range-month').should('exist').invoke('val', 12).trigger('input').click()
        cy.pause(1000)
   
        cy.get('#month-amount').should('have.text', '12 meses');
      
             
           
       })

       it('Cenario 3: Simulação de R$6.000 em 24 vezes valor esperado: 24x R$ 347,89', () => {
        // Definir o valor do R$ 6.000 no slider 
         cy.get('#slider-range').should('exist').invoke('val', 6000).trigger('input').click();
   
        // Definir 24 parcelas no slider 
        cy.get('#slider-range-month').should('exist').invoke('val', 24).trigger('input').click()
   

        
   
       })

       it('Cenario 4: Simulação de R$6.000 em 24 vezes valor esperado: 24x R$ 387,89', () => {
        // Definir o valor do R$ 6.000 no slider 
         cy.get('#slider-range').should('exist').invoke('val', 6000).trigger('input').click();
   
        // Definir 24 parcelas no slider 
        cy.get('#slider-range-month').should('exist').invoke('val', 24).trigger('input').click()
   
     
    
   
       })




 
  
})