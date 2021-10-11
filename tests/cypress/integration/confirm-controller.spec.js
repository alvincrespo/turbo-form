describe('ConfirmController', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('works!', () => {
    cy.get('a').click();

    cy.on('window:confirm', (text) => {
      expect(text).to.contains('Please confirm!');
    });

    cy.get('h1').should('have.text', 'Confirmed!');
    cy.get('#_method').should('have.text', 'delete');
    cy.get('#csrfparam').should('have.text', 'csrftoken');
  });
})
