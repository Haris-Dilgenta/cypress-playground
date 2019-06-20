describe("devexpress page",()=>{
    beforeEach(()=>{
        cy.visit("https://devexpress.github.io/testcafe/example/")
    }),
    it("should contains all fields",()=>{
        cy.get("#developer-name").should("be.visible")
        cy.get("#populate").should("be.visible")
        cy.get("#populate").should("be.visible");
        cy.url().should("contain","example")
        cy.get("h1").should("contain","Example")

    }),
    it("should show thankyou page on name submit",()=>{
        cy.get("#developer-name").type("Developer Name");
        cy.get("#submit-button").scrollIntoView()
        cy.get("#submit-button").click()
        cy.get(".result-content").should("be.visible")
        cy.get("#article-header").should("contain","Thank you,")
    })
    afterEach(()=>{
        cy.end()
    })
})  