const cypress = require('cypress')

cypress
    .run({
        spec: './cypress/e2e/*',
        browser: 'electron',
        headed: true,
        record: false,
        tag: '@tabs'
    })