// describe('Identifying elements using cypress data attribute', () => {
    
//     beforeEach('Navigate to browser', () => {
//         cy.visit("http://localhost:4200/")
      
//       })
    
//     it('Validate default content on the search input box', () => {
       
//         cy.get('[data-cy="search-input-box"]')
//             .invoke('attr', 'placeholder')
//             .should('equal', 'Search')
//     })


//     it('Enter Content into search attribute', () => {
        
//         cy.get('[data-cy="search-input-box"]')
//             .invoke('attr', 'placeholder')
//             .should('equal', 'Search')

//         cy.get('[data-cy="search-input-box"]')
//             .type('entering text using custom attribute on the element')
//     })
// })