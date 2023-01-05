describe("Navigation test", () => {
	it.only("Navigate backwards", () => {
		cy.visit("https://platzi.com")
		cy.visit("https://platzi.com/cursos/")

		cy.go(-1)
	})
})