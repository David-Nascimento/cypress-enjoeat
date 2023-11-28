import './commands'
import '@shelex/cypress-allure-plugin'
require('cypress-xpath')

Cypress.SelectorPlayground.defaults({
    selectorPriority: ['id', 'class', 'attributes', 'tag', 'nth-child']
})

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})