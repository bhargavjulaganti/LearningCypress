# How to create new project

1. Create new folder `LearningCypress`
2. Navigate to project folder `cd LearningCypress` 
3. Create Package.json `npm init -y`
4. Install cypress `npm install --save-dev cypress`
5. Open Cypress `npx cypress open`
6. Run from command line `npx cypress run`

# Good to know about cypress

- By default cypress waits for 4s , before throwing any error like element not found/Assertion etc
- Cypress by default retries , like finding element until it passes
- Cypress won't retry interactive commands such as .click() and .type()

# Cypress preferred way to add data identifiers

- Cypress suggests to add a data attribute (data-cy) to the elements and use that property  in tests to identify objects

``` Html
<input class="form-control mr-sm-2" type="text" placeholder="Search" data-cy="search-input-box">
```

cyrpess test looks like

```js
 cy.get('[data-cy="search-input-box"]')
            .invoke('attr', 'placeholder')
            .should('equal', 'Search')
```            

# Install reports

1. npm install --save-dev mocha cypress-multi-reporters mochawesome
2. 