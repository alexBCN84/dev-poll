/// <reference types='Cypress' />

Cypress.on('window:before:load', win => {
  fetch('https://unpkg.com/unfetch/dist/unfetch.umd.js')
    .then(stream => stream.text())
    .then(response => {
      win.eval(response)
      win.fetch = win.unfetch
    })
});

import PageSelectors from '../support/selectors';

describe('questions view elements on page and interactions', () => {

  beforeEach(() => {
    cy.wait(500);
    cy.visit('/');
  });

  const selector = new PageSelectors();

  context('header logo', () => {

    it('should be present', () => {
      selector.logo().should('have.length', 1).and('be.visible');
    });

    it('should have cursor pointert', () => {
      selector.logo().should('have.css', 'cursor').and('eq', 'pointer');  
    });
  });

  context('header link', () => {
    
    it('should be present', () => {
      selector.link().should('have.length', 1).and('be.visible');
    });

    it('should load question form view', () => {
      selector.link().click().then(() => {
          selector.questionForm()
            .should('have.length', 1)
            .and('be.visible');
        });
    });
  });

  context('click on header logo', () => {

    it('should load questions view again', () => {
      selector.logo().click().then(() => {
          selector.questions()
            .should('have.length', 1)
            .and('be.visible');
        });
    });
  });

  context('overview question card interactions', () => {

    it('should show info label on hover', () => {
      selector
        .overviewQuestionCard()
        .each($card => {
          cy.get($card).then($el=>{
            cy.wrap($el).trigger('mouseover');
            selector.infoLabel().should('be.visible');
          });
        });
    });

    it('should load question details view on info label click', () => {
     cy.selectFirstQuestion()
      .should('have.length', 1)
      .and('be.visible');
    })
  });

  context('question details cards', () => {
    it('should select one option, go back to questions view after voting and check that the vote went through', () => {
      cy.selectFirstQuestion();
      selector.firstOptionVotes().then($votes => {
        const txt = $votes.text();
        cy.selectFirstOption();
        selector.voteButton().click();

        // api needs time to update
        cy.wait(10000);
        selector
            .questions()
            .should('have.length', 1)
            .and('be.visible');

        cy.selectFirstQuestion();
        selector.firstOptionVotes().should(($votes2) => {
          expect($votes2.text()).not.to.eq(txt)
        })
      })
    });
  });
});
