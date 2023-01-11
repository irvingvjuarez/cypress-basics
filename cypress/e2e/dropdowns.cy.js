describe("Testing dropdowns", () => {
	before(() => {
		cy.visit("https://itera-qa.azurewebsites.net/home/automation")
	})

	it("Dropdown should work properly", () => {
		cy.get(".custom-select").select(10).should("have.value", 10)
		cy.get(".custom-select").select("Greece").should("have.value", 4)
	})
})