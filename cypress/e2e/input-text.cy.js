describe("Testing input texts", () => {
	before(() => {
		cy.visit("https://dev.to/walmyrlimaesilv/how-to-identify-an-element-by-its-text-with-cypress-16pg")
	})

	it("Should work the input correctly", () => {
		cy.get("input[placeholder='Search...']").type("Typescript")
		cy.get("button[aria-label='Search']").click()

		cy.get("input[placeholder='Search...']").clear()
	})
})