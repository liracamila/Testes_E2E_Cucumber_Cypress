import LoginElements from "../elements/LoginElements";

const loginElements = new LoginElements

const url = Cypress.config('BaseUrl')

class LoginPage {
    acessarSite() {
        cy.visit(url)
    }

    abrirMenuLogin(){
        cy.get(loginElements.menuLogin()).click()
    }

    abrirPaginaLogin(){
        cy.get(loginElements.botaoLogin()).click()
    }

    visualizarBotaoParaConectar(){

        /*cy.xpath("//input[@id='wp-submit']")
            .invoke('attr', 'value')
            .should('eq','Conecte-se')*/

        cy.get(loginElements.botaoConectese())
            .invoke('attr', 'value')
            .should('eq', 'Conecte-se')
    }

    forgotPassword(){
        cy.get(loginElements.botaoForgotPassword()).click()
    }

    visualizarCampoEmail(){
        cy.get(loginElements.campoEmail())
            .invoke('attr', 'value')
            .should('eq', 'Request reset link')
    }
}

export default LoginPage;