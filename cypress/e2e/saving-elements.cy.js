describe("Saving elements in the tests", () => {
	it("Should count the p elements correctly", () => {
		cy.visit("https://platzi.com/blog/indicadores-economicos/")

		cy.get("#top").debug()
	})
})