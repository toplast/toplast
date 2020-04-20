describe("Home page", () => {
  beforeEach(() => {
    cy.server();
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

  it("Should requests be executed correctly", () => {
    cy.fillAllFields();

    cy.route("GET", /getAlbums?.*/, "fixture:albums").as("albums");
    cy.route("GET", /getArtists?.*/, "fixture:artists").as("artists");
    cy.route("GET", /getTracks?.*/, "fixture:tracks").as("tracks");

    cy.contains("Generate chart").click();

    cy.wait("@albums")
      .its("url")
      .should("contain", "/getAlbums?user=castilh0s&period=1month&limit=1");

    cy.wait("@artists")
      .its("url")
      .should("contain", "/getArtists?user=castilh0s&period=1month&limit=5");

    cy.wait("@tracks")
      .its("url")
      .should("contain", "/getTracks?user=castilh0s&period=1month&limit=1");
  });
});
