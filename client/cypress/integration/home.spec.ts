describe("Home page", () => {
  it("Should shows title and description", () => {
    cy.visit("/");

    cy.url().should("equal", "http://localhost:3000/");
    cy.get("h1").should("have.text", "TopLast");
    cy.get("h2").should("have.text", "A Last.fm chart generator");
  });
});
