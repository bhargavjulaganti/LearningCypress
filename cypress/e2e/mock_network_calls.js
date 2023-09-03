

// describe('mock network calls', () => {

//   beforeEach('Navigate to browser', () => {
//     cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

//   })

//   it('mock network calls', () => {

//     var myresponse = [
//       {
//         "book_name": "mocked response from cypress",
//         "isbn": "RSU",
//         "aisle": "2301"
//       }
//     ]

//     cy.intercept(
//       {
//         method: 'GET', // Route all GET requests
//         url: '**/GetBook.php?AuthorName=shetty', // that have a URL that matches '/users/*'
//       },
//       myresponse // and force the response to be: []
//     ).as('getBook')


//     cy.get('#navbarSupportedContent > ul > li:nth-child(2) > a')
//       .click()

//   })


// })