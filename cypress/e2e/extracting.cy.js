describe("Extracting info from elements", () => {
	let textValue

	beforeEach(() => {
		cy.visit("https://dev.to/")
		cy.get("input[placeholder='Search...']").as("search-bar");
	})

	it("Extracting data", () => {
		cy.get("@search-bar").type("Three js")

		cy.get("@search-bar").then($input => {
			textValue = $input.val()
			expect(textValue).to.equal("Three js")
		})
	})

	it("Using variables from another test", () => {
		cy.get("@search-bar").clear()
		cy.get("@search-bar").type(textValue + " is my passion")
		// expect(textValue).to.equal("Three js")
	})
})