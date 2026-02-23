# 🚀 Automação de Testes E2E | Cypress - SauceDemo

Projeto desenvolvido como parte da formação em **Quality Assurance (QA)**, com foco na automação de testes end-to-end utilizando **Cypress**, validando um fluxo real de compra em e-commerce.

🔗 Sistema testado:  
https://www.saucedemo.com/

---

## 🎯 Objetivo do Projeto

Automatizar o fluxo básico de compra, garantindo que as principais funcionalidades estejam operando corretamente.

Fluxo automatizado:

- ✔️ Login com credenciais válidas
- ✔️ Adição de produto ao carrinho
- ✔️ Validação de alteração do botão ("Add to cart" → "Remove")
- ✔️ Validação do contador do carrinho
- ✔️ Acesso à página do carrinho
- ✔️ Verificação do título "Your Cart"

🔎 Desafio adicional (quando aplicado):
- ✔️ Fluxo completo de checkout
- ✔️ Preenchimento de dados obrigatórios
- ✔️ Finalização da compra
- ✔️ Validação da mensagem de sucesso

---

## 🛠️ Tecnologias Utilizadas

- Cypress
- JavaScript
- Node.js
- VS Code

---

## 🧪 Cenário Automatizado

### 1️⃣ Login

```js
cy.visit('https://www.saucedemo.com/')
cy.get('[data-test="username"]').type('standard_user')
cy.get('[data-test="password"]').type('secret_sauce')
cy.get('[data-test="login-button"]').click()
