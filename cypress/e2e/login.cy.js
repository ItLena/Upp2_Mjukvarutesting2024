describe('template spec', () => {

  beforeEach(() => {
    //cy.visit('./login.html')
    cy.visit('http://localhost:8080/login')
  })

  it('Form inputs is correct types', () => {
    cy.get("#username").type("Per")
    console.log("Testat user")
    cy.get("#password").type("456")

    cy.get("#btn").click()

    cy.get("#output").should("contains.text", `Inloggad`)
  })
})