Feature: Login no site da ultima

    Scenario: Visualizar opção de login
        Given que estou na página inicial da Ultima
        When clico em login
        Then na página são exibidos os campos email, senha e botão conecte-se

    Scenario: Recuperar senha
        Given que estou na página inicial da Ultima
        When clico em login
        And clico em Forgot Password?
        Then será direcionado para a página que solicita o email