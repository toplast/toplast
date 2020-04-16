/* eslint-disable no-undef */
// https://on.cypress.io/custom-commands

Cypress.Commands.add("fillAllFields", () => {
  cy.get("#username").type("castilh0s");
  cy.get("#chartOption").select("Top artists");
  cy.get("#period").select("1 month");
});
