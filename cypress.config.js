const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: 'mochawesome',//'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
  video: false,
  env: {
    foo: 'bar',
    baz: 'quux'
  },
  e2e: {
    // baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {
      on('after:run', (results) => {
      })
      // implement node event listeners here
       // require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
