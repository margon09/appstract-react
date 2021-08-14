describe("Tests the registration forms",()=>{
    beforeEach(()=>{
        cy.visit("/")
        cy.get("Button").click()
    })
        
    it("tests correct name input",()=>{
        cy.get(".name")
            .clear()
            .then($el => $el[0].checkValidity())
            .should('be.false')
        cy.get(".name")
            .clear()
            .type('8954')
            .then($el => $el[0].checkValidity())
            .should('be.false')
        cy.get(".name")
            .clear()
            .type('?+ds')
            .then($el => $el[0].checkValidity())
            .should('be.false') 
        cy.get(".name")
            .clear()
            .type('Lars')
            .then($el => $el[0].checkValidity())
            .should('be.true')       
    });

    it("tests correct surname input",()=>{
        cy.get(".surname")
            .clear()
            .then($el => $el[0].checkValidity())
            .should('be.false')
        cy.get(".surname")
            .clear()
            .type('45646')
            .then($el => $el[0].checkValidity())
            .should('be.false')
        cy.get(".surname")
            .clear()
            .type('Adas378')
            .then($el => $el[0].checkValidity())
            .should('be.false') 
        cy.get(".surname")
            .clear()
            .type('Jørgensen')
            .then($el => $el[0].checkValidity())
            .should('be.true')       
    });

    it("tests correct phone input",()=>{
        cy.get(".phone")
            .type('4555555555')
            .then($el => $el[0].checkValidity())
            .should('be.false')
        cy.get(".phone")
            .clear()
            .type('Adas378')
            .then($el => $el[0].checkValidity())
            .should('be.false') 
        cy.get(".phone")
            .clear()
            .type('858585858')
            .then($el => $el[0].checkValidity())
            .should('be.false')
        cy.get(".phone")
            .clear()
            .type('8585858')
            .then($el => $el[0].checkValidity())
            .should('be.false') 
        cy.get(".phone")
            .clear()
            .type('85858585')
            .then($el => $el[0].checkValidity())
            .should('be.true')
        cy.get(".phone")
            .clear()
            .type('+4585858585')
            .then($el => $el[0].checkValidity())
            .should('be.true')
        cy.get(".phone")
            .clear()
            .type('+45 85 85 85 85')
            .then($el => $el[0].checkValidity())
            .should('be.true')       
        cy.get(".phone")
            .clear()
            .type('85 85 85 85')
            .then($el => $el[0].checkValidity())
            .should('be.true')                          
    });

    it("tests correct email input",()=>{
        cy.get(".email")
            .clear()
            .then($el => $el[0].checkValidity())
            .should('be.false')
        cy.get(".email")
            .clear()
            .type('45646')
            .then($el => $el[0].checkValidity())
            .should('be.false')
        cy.get(".email")
            .clear()
            .type('Adas378')
            .then($el => $el[0].checkValidity())
            .should('be.false') 
        cy.get(".email")
            .clear()
            .type('dff@hgh')
            .then($el => $el[0].checkValidity())
            .should('be.false')  
        cy.get(".email")
            .clear()
            .type('dff@hgh.')
            .then($el => $el[0].checkValidity())
            .should('be.false') 
        cy.get(".email")
            .clear()
            .type('anna@gmail.com')
            .then($el => $el[0].checkValidity())
            .should('be.true')              

    });

    it("tests correct form submission",()=>{
        cy.get(".name")
            .clear()
            .type('Anna')
            .then($el => $el[0].checkValidity())
            .should('be.true')
        cy.get(".surname")
            .clear()
            .type('Andreasen')
            .then($el => $el[0].checkValidity())
            .should('be.true')
        cy.get(".phone")
            .clear()
            .type('65689574')
            .then($el => $el[0].checkValidity())
            .should('be.true') 
        cy.get(".email")
            .clear()
            .type('anna@yahoo.com')
            .then($el => $el[0].checkValidity())
            .should('be.true')
        cy.get("form")
            .submit()
        cy.get("div.message").should('exist');    

    });
});