describe('Server', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('works!', () => {
    cy.get('h1').should('have.text', 'The server is up!');
  });
})
