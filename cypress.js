describe('My First Test', function() {
  it('Visits our webpage', function() {
    cy.visit('https://www.google.com/')
    cy.get('input[name="q"]').type("otaviormachado github")
    cy.contains('Pesquisa Google').click()
    cy.contains('https://github.com/OtavioRMachado')
  })
})
