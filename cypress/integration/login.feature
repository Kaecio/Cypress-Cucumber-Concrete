#language: pt

Funcionalidade: Login
   Como usuário, desejo fazer o login com sucesso para utilizar a ferramenta do orageHrm

Contexto:
    Dado que eu estou na página de login

@fazer @squad2
Cenario: Validar o "Required" no campo Username 
    Quando preencho somente o campo Password
    E realizo o login
    Então eu vejo a alert "Required" no campo Username
    
@smoke @squad2
Cenario: Validar o "Required" no campo Password 
    Quando preencho somente o campo Username
    E realizo o login
    Então eu vejo a alert "Required" no campo Password

@smoke @aquad3
Cenario: Validar o "Required" no campo Username e no campo Password
    Quando eu não preencho os campos Username e Password
    E realizo o login
    Então eu vejo a alert "Required" no campo Username e no campo Password

@regressivo @aquad3
Cenario: Fazer login com sucesso
    Quando preencho os campos Username e Password corretamente 
    E realizo o login
    Então sou direcionado para a página Home   
