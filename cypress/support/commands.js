/// <reference types='Cypress' />

import PageSelectors from '../support/selectors';

const selector = new PageSelectors();

Cypress.Commands.add("selectFirstQuestion", () => { 
    selector
    .overviewQuestionCard().first().then($el => {
      cy.wrap($el).trigger('mouseover');
      selector.infoLabel().click();
      return selector
        .questionDetailsView()
      })
});

Cypress.Commands.add("selectFirstOption", () => {
  selector.firstOptionInput().click();
});
