describe("Date-pickers", () => {
	it("Should work fine the date-picker", () => {
		cy.visit("https://material.angular.io/components/datepicker/overview")
		cy.get("datepicker-overview-example").as("picker-container")

		cy.get("@picker-container")
			.find("input")
			.eq(0)
			.type("06/03/2023")
	})
})