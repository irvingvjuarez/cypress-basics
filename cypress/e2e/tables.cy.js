describe("Using tables", () => {
	it("Table should work properly", () => {
		cy.visit("https://www.w3schools.com/html/html_tables.asp")
		cy.get("#customers").find("th").as("theads")

		cy.get("@theads")
			.first()
			.invoke("text")
			.should("equal", "Company")

		cy.get("@theads")
			.eq(1)
			.invoke("text")
			.should("eq", "Contact")

		cy.get("@theads")
			.eq(2)
			.invoke("text")
			.should("eq", "Country")
	})
})