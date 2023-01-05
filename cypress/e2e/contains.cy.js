describe("Using contains assertion", () => {
	it("Obtaining an element by its content", () => {
		cy.visit("automation-practice-form")
		cy.contains("Reading") // btn
	})

	it("Obtaining by its selector and content", () => {
		cy.visit("automation-practice-form")
		cy.contains(".header-wrapper", "Widgets")
	})
})