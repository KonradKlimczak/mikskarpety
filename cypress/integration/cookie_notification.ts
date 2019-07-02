describe('Cookie Notification', () => {
  it('Accept and it is gone', () => {
    cy.visit('http://localhost:9001');

    cy.get('.cookies-notification');
    cy.getCookie('analitics').should('not.exist');
    cy.contains('Zaakceptuj').click();
    cy.getCookie('analitics').should('have.property', 'value', 'true');
    cy.get('.cookies-notification').should('not.exist');

  });
});
