describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.url().should("equal", "http://localhost:3000/");
  });

  it("Should shows title and description", () => {
    cy.get("h1").should("have.text", "TopLast");
    cy.get("h2").should("have.text", "A Last.fm chart generator");
  });

  it("Should have be a header", () => {
    cy.get("header").should("have.text", "TopLast");
  });

  it("Should have be a footer", () => {
    cy.get("footer").should(
      "have.text",
      "Made with ❤️ by Castilhos and Munhoz",
    );
  });
});
