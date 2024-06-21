describe('template spec', () => {
    
beforeEach(()=>{
  cy.visit('./login.html')
})
  
  it('Form inputs is correct types', ()=>{
    cy.get("#username").type(text)

    cy.get("#password").type(password)

    cy.get("button").click()
  })
  
  
})