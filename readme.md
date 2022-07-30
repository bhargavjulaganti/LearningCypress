# How to create new project

1. Create new folder `LearningCypress`
2. Navigate to project folder `cd LearningCypress` 
3. Create Package.json `npm init -y`
4. Install cypress `npm install --save-dev cypress`
5. Open Cypress `npx cypress open`


# Good to know about cypress

- By default cypress waits for 4s , before throwing any error like element not found/Assertion etc

# Cypress preferred way to add data identifiers

- Cypress suggests to add a data attribute (data-cy) to the elements and use that property  in tests to identify objects

``` Html
<input type="text" data-cy="input-first-name"> <input> 
```

cyrpess test looks like

//TODO: finish the command# LearningCypress
