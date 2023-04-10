#language: pt

Funcionalidade: Login
   Como usuário, desejo fazer o login cpm sucesso para utilizar a ferramenta do orageHrm

Contexto:
    Dado que eu estou na página de login

Cenario: Ver o "Required" no input Username 
    Quando preencher somente o campo Password
    E clicar no botão Login
    Então eu vejo a alert "Required" no input Username

Cenario: Ver o "Required" no input Password 
    Quando preencher somente o campo Username
    E clicar no botão Login
    Então eu vejo a alert "Required" no input Password

Cenario: Ver o "Required" no input Username e no input Password
    Quando eu não preencher os campos Username e Password
    E clicar no botão Login
    Então eu vejo a alert "Required" no input Username e no input Password

@regressivo
Cenario: Fazer login com sucesso
    Quando preencho os campos Username e Password corretamente 
    E clicar no botão Login
    Então sou direcionado para a página Home   
