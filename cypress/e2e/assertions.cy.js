describe("Testing assertions", () => {
	it("Obtaining element by a tag", () => {
		cy.visit("/automation-practice-form")
		cy.get("input")
	})

	it("Obtaining by an attribute", () => {
		cy.visit("/automation-practice-form")
		cy.get("[placeholder='First Name']")
	})

	it("Obtaining by an attribute and a tag", () => {
		cy.visit("/automation-practice-form")
		cy.get("input[placeholder='First Name']")
	})

	it("Obtaining by and id", () => {
		cy.visit("/automation-practice-form")
		cy.get("#firstName")
	})

	it("Obtaining by class name", () => {
		cy.visit("/automation-practice-form")
		cy.get(".formControl")
	})
})