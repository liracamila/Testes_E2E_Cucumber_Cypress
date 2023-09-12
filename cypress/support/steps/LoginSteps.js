import LoginPage from "../pageobjects/LoginPage";
const loginPage = new LoginPage

Given('que estou na página inicial da Ultima', () => {
    loginPage.acessarSite();
})
When('clico em login', () => {
    loginPage.abrirMenuLogin()
    loginPage.abrirPaginaLogin()
})
Then('na página são exibidos os campos email, senha e botão conecte-se', () => {
    loginPage.visualizarBotaoParaConectar()
})

And('clico em Forgot Password?', () => {

})

Then('será direcionado para a página que solicita o email', () => {

})
