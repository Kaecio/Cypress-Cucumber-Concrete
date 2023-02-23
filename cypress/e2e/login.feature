Feature: Login
   Como usuario, desejo fazer o login cpm sucesso para ultilizar a ferramenta do orageHrm

Scenario: Ver o "Required" no input Username 
    Given que eu estou na pagina de login
    When preencher somente o campo Password
    And clicar no botao Login
    Then eu vejo a alert "Required" no input Username

Scenario: Ver o "Required" no input Password 
    Given que eu estou na pagina de login
    When preencher somente o campo Username
    And clicar no botao Login
    Then eu vejo a alert "Required" no input Password

Scenario: Ver o "Required" no input Password e no input Password
    Given que eu estou na pagina de login
    When eu nao preencher os campos Username e Password
    And clicar no botao Login
    Then eu vejo a alert "Required" no input Password e no input Password

Scenario: Fazer login com sucesso
    Given que eu estou na pagina de login
    When preencho os campos Username e Password corretamente 
    And clicar no botao Login
    Then sou direcionado para a pagina Home   

