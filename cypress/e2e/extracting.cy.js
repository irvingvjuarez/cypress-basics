describe("Extracting info from elements", () => {
	before(() => {
		cy.visit("https://dev.to/")
	})

	it("Extracting data", () => {
		cy.get("input[placeholder='Search...']").as("search-bar");
		cy.get("@search-bar").type("Three js")

		cy.get("@search-bar").then($input => {
			expect($input.val()).to.equal("Three js")
		})
	})
})