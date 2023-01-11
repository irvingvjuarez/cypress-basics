describe("Date-pickers", () => {
	it("Should work fine the date-picker", () => {
		cy.visit("https://material.angular.io/components/datepicker/overview")
		cy.get("datepicker-overview-example").as("picker-container")

		// Clicking the logo to unlock input
		cy.get("@picker-container")
			.find("svg")
			.click()

		// Typing the date on the input
		cy.get("@picker-container")
			.find("input")
			.eq(0)
			.type("06/03/2023")
	})
})