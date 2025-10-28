describe("Main content", () => {
  it("should load", () => {
    cy.visit("/");
	  cy.contains("h1", "Klikin Contact List Test");
  });
});
