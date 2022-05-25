
describe('cadastro de novo usuario', () => {
    beforeEach(() => {
        cy.visit('https://front.serverest.dev/cadastrarusuarios');
    });

    it('deve cadastrar um novo usuario com sucesso', () => {
        cy.fixture('exemplo.json').then((dados) => {
            cy.get('[data-testid="nome"]').should('be.visible').type(dados.nome);
            cy.get('[data-testid="email"]').should('be.visible').type(dados.email);
            cy.get('[data-testid="password"]').should('be.visible').type(dados.senha);
        });
        cy.get('[data-testid="cadastrar"]').should('be.visible').click({ force : true});
    });
});