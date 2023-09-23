// describe('Identifying elements using cypress data attribute', () => {
//     it('Validate default content on the search input box', () => {
//         cy.visit("http://localhost:4200/")

//         cy.get('[data-cy="search-input-box"]')
//             .invoke('attr', 'placeholder')
//             .should('equal', 'Search')
//     })


//     it('Enter Content into search attribute', () => {
//         cy.visit("http://localhost:4200/") 

//         cy.get('[data-cy="search-input-box"]')
//             .invoke('attr', 'placeholder')
//             .should('equal', 'Search')

//         cy.get('[data-cy="search-input-box"]')
//             .type('entering text using custom attribute on the element')
//     })
// })