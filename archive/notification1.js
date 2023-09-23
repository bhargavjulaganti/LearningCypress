// wrapper.js
const cypress = require('cypress')

async function testResults() {

  const runOptions = await cypress.cli.parseRunArguments(process.argv.slice(2))
const results = await cypress.run(runOptions)
// process the "cypress.run()" results

}
