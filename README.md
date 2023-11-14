
Resultscx Assessment

## Installation of Cypress

cd  /project/path
> npm init
> 
> npm install cypress --save-dev


## Install X-path Plugin
> npm install cypress-xpath
>
 add below line in cypress/support/e2e.js
 ```
require('cypress-xpath')
```

 Configuration Specific to this Project
 
 update cypress/support/e2e.js with below exception handler
 
 ```
 Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    })
```

## To run Cypress tests using Cypress command line
```
npx cypress run
```

## To run Cypress tests using specific spec file

```
npx cypress open --spec <path-to-spec-file>
npx cypress run --spec cypress\e2e\HomePageMenu.cy.js
```


## To run Cypress tests using Test Runner
```
npx cypress run
```

## To run Cypress tests using specific browser

```
npx cypress run --spec <path-to-spec-file> --browser <browser-name>
npx cypress run --spec cypress\e2e\HomePageMenu.cy.js --browser chrome
```
