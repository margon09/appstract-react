describe('App page opens', ()=>{
    it('Opens the registration form', ()=>{
        cy.visit("/");
        cy.get("Button").click();
        cy.get("form").should("be.visible");
    })
    it('Registration form not visible without Sign up click', ()=>{
        cy.visit("/");
        cy.get("form").should('not.exist');
    })
})