describe('template spec', () => {
    
beforeEach(()=>{
  cy.visit('./login.html')
})
  
  it('Form inputs is correct types', ()=>{
    cy.get("#username").type("Per")
    console.log("Testat user")
    cy.get("#password").type("456")

    cy.get("#btn").click()

    cy.get("#output").should("contains.text", `You are logged in`)
  })
  
  
})