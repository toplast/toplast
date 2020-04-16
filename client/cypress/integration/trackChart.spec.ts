describe("Album chart", () => {
  const chart = {
    albums: require("../fixtures/albums.json"),
    artists: require("../fixtures/artists.json"),
    tracks: require("../fixtures/tracks.json"),
    type: "topTracks",
  };

  const SECTIONS = [
    {
      title: "Deus e o Diabo na Terra do Sol",
      artist: "DJONGA",
      scrobbles: "2",
    },
    { title: "Gelo", artist: "DJONGA", scrobbles: "2" },
    { title: "HAT-­TRICK", artist: "DJONGA", scrobbles: "2" },
    { title: "JUNHO DE 94", artist: "DJONGA", scrobbles: "2" },
  ];

  beforeEach(() => {
    localStorage.setItem("chart", JSON.stringify(chart));

    cy.visit("/generate");
    cy.url().should("equal", "http://localhost:3000/generate");
  });

  it("Should render chart header", () => {
    cy.get("header")
      .find("h1")
      .should("have.text", "Leal");

    cy.get("header")
      .find("h2")
      .within(() => {
        cy.root()
          .eq(0)
          .should("have.text", "Most listened track");

        cy.root()
          .eq(1)
          .should("have.text", "DJONGA");

        cy.root()
          .eq(2)
          .should("have.text", "3 scrobbles");
      });
  });

  it("Should render chart body", () => {
    cy.get("#body")
      .find('[data-cy="section"]')
      .within(() => {
        SECTIONS.forEach((section, position) => {
          cy.root()
            .eq(position)
            .find("h1")
            .should("have.text", section.title);

          cy.root()
            .eq(position)
            .find("h2")
            .should("have.text", section.artist);

          cy.root()
            .eq(position)
            .find("#badgeLabel")
            .should("have.text", section.scrobbles);
        });
      });
  });

  it("Should render chart footer", () => {
    cy.get("footer")
      .find('[data-cy="section"]')
      .within(() => {
        cy.root()
          .eq(0)
          .find("h2")
          .should("have.text", "Violeta");

        cy.root()
          .eq(0)
          .find("h3")
          .should("have.text", "Terno Rei");

        cy.root()
          .eq(0)
          .find("h4")
          .should("have.text", "Most listened album");

        cy.root()
          .eq(1)
          .find("h2")
          .should("have.text", "Terno Rei");

        cy.root()
          .eq(1)
          .find("h4")
          .should("have.text", "Most listened artist");
      });
  });
});
