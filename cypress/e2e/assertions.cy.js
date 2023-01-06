describe("Assertions", () => {
	before(() => {
		cy.visit("https://platzi.com/blog/codigo-desconocido/")
		cy.url().should("include", "platzi.com/blog")
	})

	it("Test one", () => {
		cy.get("h1").should("be.visible").and("contain.text", "Nuevos Laboratorios Avanzados")
	})

	it("Test two", () => {
		cy.get("h1").then(header => {
			expect(header).to.be.visible
			expect(header).to.contain.text("Nuevos Laboratorios Avanzados")
		})
	})
})