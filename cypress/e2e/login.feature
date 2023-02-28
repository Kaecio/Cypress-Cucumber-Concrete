#language: pt

Funcionalidade: Login
   Como usuario, desejo fazer o login cpm sucesso para ultilizar a ferramenta do orageHrm

Cenario: Ver o "Required" no input Username 
    Dado que eu estou na pagina de login
    Quando  preencher somente o campo Password
    E clicar no botao Login
    Então eu vejo a alert "Required" no input Username

Cenario: Ver o "Required" no input Password 
    Dado que eu estou na pagina de login
    Quando  preencher somente o campo Username
    E clicar no botao Login
    Então eu vejo a alert "Required" no input Password

Cenario: Ver o "Required" no input Password e no input Password
    Dado que eu estou na pagina de login
    Quando  eu nao preencher os campos Username e Password
    E clicar no botao Login
    Então eu vejo a alert "Required" no input Password e no input Password

@regressivo
Cenario: Fazer login com sucesso
    Dado que eu estou na pagina de login
    Quando  preencho os campos Username e Password corretamente 
    E clicar no botao Login
    Então sou direcionado para a pagina Home   

