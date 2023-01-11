describe("Using tables", () => {
	it("Table should work properly", () => {
		cy.visit("https://www.w3schools.com/html/html_tables.asp")
		cy.get("#customers").as("table")
		cy.get("@table").find("th").as("theads")
		cy.get("@table").find("tr").as("rows")

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

		cy.get("@rows").should("have.length", 7)

		cy.get("@rows")
			.eq(1).find("td")
			.eq(1)
			.invoke("text")
			.should("eq", "Maria Anders")
	})
})