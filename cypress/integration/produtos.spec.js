describe('buscando produtos', () => {
    
    it('buscando todos os produtos', () => {
        cy.request('GET', 'https://serverest.dev/produtos').then((response) => {
            cy.writeFile('cypress/fixtures/produtos.json', response.body.produtos);
        });
    });

    it('buscando um produto pelo id', () => {
        cy.readFile('cypress/fixtures/produtos.json').then((produtos) => {
            cy.request('GET', `https://serverest.dev/produtos/${produtos[0]._id}`).then((produto_id) => {
                cy.log('produto buscado pelo ID:')
                cy.log(produto_id.body.nome);
            });
        });
    });
});