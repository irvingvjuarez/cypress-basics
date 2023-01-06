describe("Saving elements in the tests", () => {
	it("", () => {
		cy.visit("/automation-practice-form")

		cy.get("input[placeholder='First Name']")
			.parents()
			.find("label")
			.then(labels => {
				expect(labels.length).to.eq(16)
			})
	})
})