## Testes com Cucumber e Cypress:

Projeto com fins acadêmicos do tutorial dos testes E2E usando o Cucumber com Cypress com funcionalidades descritas usando BDD. 

### 1. Comandos necessários para instalar o projeto localmente

- Documentação do cypress: https://docs.cypress.io/guides/getting-started/installing-cypress

```bash
# Primeira vez que for instalar o cypress
npm install cypress --save-dev
```

- Documentação do cucumber: https://cucumber.io/docs/installation/javascript/

```bash
# Primeira vez que for instalar o cypress cucumber processor
npm install --save-dev cypress cypress-cucumber-preprocessor
```
- Testar a instalação do Cypress e depois fechar o navegador.
```bash 
npx cypress@9.7.0 open
```

### 2. Configurando o Cucumber no Cypress:Adicione ao arquivo cypress/plugins/index.js:

```bash
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```

### 3. Adicione o seguinte código no arquivo package.json:

```bash
{
    "scripts": {
        "test": "cypress run --browser chrome"
    },
    "cypress-cucumber-preprocessor": {
        "step_definitions": "cypress/support/steps"
    },
    "devDependencies": {
      "cypress": "^9.7.0",
      "cypress-cucumber-preprocessor": "^4.3.1"
    }
}
```

### 4. Executar o projeto:

```bash
# No servidor
npm run test
```

```bash
# Localmente
npx cypress open
```

### 5. Instalação do Xpath para Cypress

- Acessar: https://www.npmjs.com/package/cypress-xpath

```bash
npm install -D cypress-xpath
```

- Adicionar ao final do do arquivo cypress/support/index.js

```bash
require('cypress-xpath');
```

- Quando for usar o xpath dentro das classes de Elementos

```bash
#Exemplo:
cy.xpath("//input[@id='wp-submit']")
  .invoke('attr', 'value')
  .should('eq','Conecte-se')
```
### 6. Comandos do Cypress

- Seletor é o elemento HTML único que pode ser recuperado usando o Xpath ou um atributo chave que identifique o elemento, por exemplo: estilos css, id, values, etc.

- cy.get('seletor')
Este comando é responsável por selecionar o elemento da tela no qual executamos uma ação. Funcionamento semelhante ao de levar o cursor do mouse em cima do que queremos.Para entender melhor como capturar seletores de elementos, você pode acessar um bom tutorial neste link.

- cy.get('seletor').click()
O comando click é utilizado para realizar a ação de clicar em um elemento da página e, para isso, deve ser utilizado em conjunto com o comando GET ou outro comando de mesma função. Funcionamento semelhante ao de clicar com o botão esquerdo do mouse no elemento que queremos.

- cy.get('seletor').type('texto')
Type é utilizado para setar informações em campos. Funcionamento semelhante ao de digitarmos com nosso teclado.

- cy.visit('http://dev-testqa.com')
O comando visit é utilizado para acessar endereços virtuais. Com ele acessamos o site em que iremos realizar os testes.

- cy.get('seletor').should('eq', 'Login') 
O comando get seguido do should é utilizado para verificar se houve o resultado esperado.