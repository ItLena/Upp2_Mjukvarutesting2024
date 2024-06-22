describe('template spec', () => {

    beforeEach(() => {
        //cy.visit('./login.html')
        cy.visit('http://localhost:8080/')
    })

    it('Form inputs is correct types', () => {
        cy.get("#name").type("Jon")
        console.log("Skapar ny user")
        cy.get("#password").type("123")

        cy.get("#subbtn").click()

        cy.get("#LoginPage").should("contains.text", `Login Page`)
    })
})