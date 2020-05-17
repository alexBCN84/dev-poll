class PageSelectors {
    logo() {
        return cy.get("[data-cy=logo]");
    }
    link() {
        return cy.get("[data-cy=header-link]");
    }
    questionForm() {
        return cy.get("[data-cy=question-form-view]");
    }
    questions() {
        return cy.get("[data-cy=questions-view]")
    }
    overviewQuestionCard() {
        return cy.get("[data-cy=overview-card]")
    }
    infoLabel() {
        return cy.get("[data-cy=info-label]")
    }
    questionDetailsView() {
        return cy.get("[data-cy=question-details-view]")
    }
    questionOptions() {
        return cy.get("[data-cy=question-options]")
    }
    firstOptionVotes() {
        return cy.get("[data-cy=question-options] > :nth-child(1) span")
    }
    firstOptionInput() {
        return cy.get("[data-cy=question-options] > :nth-child(1) input")
    }
    voteButton() {
        return cy.get("[data-cy=vote-button]")
    }
}

export default PageSelectors