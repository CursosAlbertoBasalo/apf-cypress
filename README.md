# apf-cypress

Laboratorio de pruebas automatizadas con Cypress para ApFutura

```bash
# create new npm project
npm init -y
# add cypress as dependency
npm i cypress
# add typescript as dependency
npm i typescript --save-dev
npx tsc --init --types cypress --lib dom es6
# add several dev dependencies
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier prettier
npm i -D @types/node
# add cypress open to start script and run it
npm start
# js -> ts
```

https://medium.com/tech-learn-share/set-up-typescript-in-your-cypress-project-0063e3c365a5
https://docs.cypress.io/guides/tooling/typescript-support
