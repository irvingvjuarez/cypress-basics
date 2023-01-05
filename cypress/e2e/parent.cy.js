describe("Using parent method", () => {
	it("Obtaining the parent element of the selector", () => {
		cy.visit("/automation-practice-form")
		cy.get("input[placeholder='First Name']").parent()
	})

	it("Obtaining an specific parent element of the selector", () => {
		cy.visit("/automation-practice-form")
		cy.get("input[placeholder='First Name']").parents().find("label")
	})

	it("Obtaining element starting from the parent to the children", () => {
		cy.visit("/automation-practice-form")
		cy.get("form").find("label") // gonna find all labels in the form
	})
})