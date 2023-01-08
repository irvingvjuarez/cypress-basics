describe("Wait feature in cypress", () => {
	before(() => {
		cy.visit("https://platzi.com/blog/indicadores-economicos/")
	})

	it("Wait for an element", () => {
		cy.get("#top", { timeout: 6000 }).should("be.visible")
	})

	it("Making sure the element is there from the very first moment", () => {
		cy.get("#facebook", { timeout: 0 })
	})

	it("Wait for a defined time", () => {
		cy.wait(5000)
	})
})