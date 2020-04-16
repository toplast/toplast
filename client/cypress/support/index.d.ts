/* eslint-disable @typescript-eslint/interface-name-prefix */
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Fill all form fields
     */
    fillAllFields(): Chainable<Element>;
  }
}
