describe("Testing dropdowns", () => {
	it("Dropdown should work properly", () => {
		cy.visit("https://itera-qa.azurewebsites.net/home/automation")
		cy.get(".custom-select").select(10).should("have.value", 10)
		cy.get(".custom-select").select("Greece").should("have.value", 4)
	})

	it.only("Dynamic dropdowns", () => {
		cy.visit("https://react-select.com/home")
		cy.get("#react-select-6-input").type(" ")

		// cy.get("#react-select-6-listbox").children().children().each($el => {
		// 	if ($el.text() === "Red") {
		// 		$el.click()
		// 	}
		// })

		cy.get("#react-select-6-option-3").click()
	})
})