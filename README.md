# Enjoeat - Projeto de Automação com Cypress

Estrutura do projeto
```
├── Cypress-enjoeat
│ ├── cypress/
│ │   ├── config/
│ │   ├── fixtures/
│ │   ├── integration/
│ │   │   └── .feature
│ │   ├── plugins/
│ │   └── support/
│ │       ├── elements/
│ │       ├── pages/
│ │       └── step_definitions/
│ └── enjoeat
│     ├── api/
│     ├── dist/
│     ├── .gitignore
│     ├── package.json
│     └── server.js
├── .dockerignore
├── .gitignore
├── cypress.json
├── Dockerfile
├── nginx.conf
├── package.json
├── README.md
└── yarn.lock
```

## Configurando ambiente

Considerando que já tenha o Node.js instalado na maquina, hora de baixar as dependencias do projeto.
```js
npm install
```
Para startar o projeto enjoeat, deve acessar a pasta enjoeat e rodar o comando:
```js
npm start
```

## Executando teste

Executando launch do cypress
```js
npm run cy:open
```

Executando em headless
```js
npm run ci
```
