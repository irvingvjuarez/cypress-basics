describe("Interacting with elements", () => {
	before(() => {
		cy.visit("https://github.com/irvingvjuarez")
	})

	it("Should make click correctly", () => {
		cy.contains("yard-sale").click()
		cy.contains("Shopping cart app powered with React + TypeScript").should("be.visible")
	})
})