describe('Teste de compras EBAC', () => {
  it('Fluxo de compra', () => {
    cy.visit('https://www.saucedemo.com/')                           //site a ser testado
    cy.get('[data-test="username"]').type('standard_user')           //campo usuário válido
    cy.get('[data-test="password"]').type('secret_sauce')            //campo senha válido
    cy.get('[data-test="login-button"]').click()                     //botão login
    cy.get('[data-test="title"]').should('contain', "Products")      //validação de login bem sucedido
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()                           //adiciona o produto ao carrinho
    cy.get('[data-test="remove-sauce-labs-bike-light"]').should('contain', "Remove")           //1ª validação de que o produto foi adicionado ao carrinho
    cy.get('[data-test="shopping-cart-badge"]').should('contain', "1")                        //2ª validação de que o produto foi adicionado ao carrinho
    cy.get('[data-test="shopping-cart-link"]').click()                                       //clica no carrinho de compras
    cy.get('[data-test="title"]').should('contain', "Your Cart")                            //Validação de que está na página do carrinho
    cy.get('[data-test="checkout"]').click()                                               //clica no botão checkout
    cy.get('[data-test="firstName"]').type('Usuário')                                     //Preenche campo nome
    cy.get('[data-test="lastName"]').type('Standard')                                    //Preenche campo sobrenome
    cy.get('[data-test="postalCode"]').type('00000-000')                                //Preenche campo CEP
    cy.get('[data-test="continue"]').click()                                           //Clica no botão continuar
    cy.get('[data-test="total-info-label"]').should('contain', "Total")               //Validação de que está na página de finalização da compra
    cy.get('[data-test="finish"]').click()                                          //Clica no botão finalizar
    cy.get('[data-test="complete-header"]').should('contain', "Thank")             //Validação de que a compra foi finalizada com sucesso
  })
})
