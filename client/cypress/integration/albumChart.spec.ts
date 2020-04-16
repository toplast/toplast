describe("Album chart", () => {
  const chart = {
    albums: require("../fixtures/albums.json"),
    artists: require("../fixtures/artists.json"),
    tracks: require("../fixtures/tracks.json"),
    type: "topAlbums",
  };

  const SECTIONS = [
    { title: "Histórias da Minha Área", artist: "DJONGA", scrobbles: "34" },
    { title: "Grana Azul", artist: "Rodrigo Zin", scrobbles: "34" },
    {
      title: "Zulu, Vol .1: De Onde Eu Possa Alcançar o Céu Sem Deixar o Chão",
      artist: "Zudizilla",
      scrobbles: "32",
    },
    { title: "Casas", artist: "Rubel", scrobbles: "26" },
  ];

  beforeEach(() => {
    localStorage.setItem("chart", JSON.stringify(chart));

    cy.visit("/generate");
    cy.url().should("equal", "http://localhost:3000/generate");
  });

  it("Should render chart header", () => {
    cy.get("header")
      .find("h1")
      .should("have.text", "Violeta");

    cy.get("header")
      .find("h2")
      .within(() => {
        cy.root()
          .eq(0)
          .should("have.text", "Most listened album");

        cy.root()
          .eq(1)
          .should("have.text", "Terno Rei");

        cy.root()
          .eq(2)
          .should("have.text", "59 scrobbles");
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
            .find("#badge")
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
          .should("have.text", "Terno Rei");

        cy.root()
          .eq(0)
          .find("h4")
          .should("have.text", "Most listened artist");

        cy.root()
          .eq(1)
          .find("h2")
          .should("have.text", "Leal");

        cy.root()
          .eq(1)
          .find("h3")
          .should("have.text", "DJONGA");

        cy.root()
          .eq(1)
          .find("h4")
          .should("have.text", "Most listened track");
      });
  });
});
