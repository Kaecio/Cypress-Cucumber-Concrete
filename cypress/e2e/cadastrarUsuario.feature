#language: pt

Funcionalidade: Cadastrar usuário
    Como usuário da plataforma orageHRM, desejo cadastrar novos 
    usuários como admin
    
Contexto: 
    Dado que estou na página de Admin
    E adiciono um novo usuário

@manual @smoke @squad1
Esquema do Cenario: Cadastrar usuário inválido
    Quando submeto o seguinte formulário de cadastro "<employee name>"
    E salvo o novo usuário
    Então vejo a mensagem de "Required" nos campos não preenchidos

    Exemplos:
    |employee name     |    
    |Linda Jane Anderson|
    
@regressivo @squad1
Esquema do Cenario: Cadastrar usuário com sucesso
    Quando preencho os seguites dados corretamente "<user role>" "<employee name>" "<status>" "<username>" "<password>"
    E salvo o novo usuário
    Então vejo o pop up com a seguinte mensagem "Success"
    E vejo o novo usuario cadastrado em tela

    Exemplos:
    |user role |employee name      |status   |username         |password  |
    |Admin     |Linda Jane Anderson |Enabled  |Henrique Braga   |Teste123! |
    |ESS       |Linda Jane Anderson |Disabled |Fanderson Kaecio |Teste123! |






# Esquema do Cenario: Submeter um cadastro somente com o papel funcao "<user role>"
#     E clico no botao Add
#     Quando submeto o seguinte formulario de cadastros "<user role>"
#     E clico no botao Save
#     Então vejo a mensagem de "Required" nos campos não preenchidos

#     Exemplos:
#     |user role    |
#     | Admin       |               
#     | ESS         |


# Esquema do Cenario: Submeter um cadastro somente com o status
#     E clico no botao Add
#     Quando submeto o seguinte formulario de cadastro
#     Então vejo a mensagem de Required nos campos não preenchidos

#     Exemplos:
#     |user role    |employee name|status     |username|passwor|confirm password|
#     |             |             |Enabled    |        |       |                |
#     |             |             |Disabled   |        |       |                |



# Cenario:   Submeter um cadastro somente com nome do usuario
#     E clico no botao Add
#     Quando submeto o seguinte formulario de cadastro
#     |user role    |employee name|status|username        |passwor|confirm password|
#     |             |             |      |Henrique Braga  |       |                |
#     |             |             |      |Fanderson Kaecio|       |         
#     Então vejo a mensagem de Required nos campos não preenchidos



# Cenario:   Submeter um cadastro somente com primeiro password
#     E clico no botao Add
#     Quando submeto o seguinte formulario de cadastro
#     |user role    |employee name|status|username|password   |confirm password|
#     |             |             |      |        |Teste123!  |                |
#     Então vejo a mensagem de Required nos campos não preenchidos



# Cenario:   Submeter um cadastro somente com a confirmacao do password
#     E clico no botao Add
#     Quando submeto o seguinte formulario de cadastro
#     |user role    |employee name|status|username|passwor|confirm password|
#     |             |             |      |        |       |                |
#     |             |             |      |        |       |Teste123!       |
#     Então vejo a mensagem de Required nos campos não preenchidos


# Cenario:   Submeter um cadastro sem o password
#     E clico no botao Add
#     Quando submeto o seguinte formulario de cadastro
#     |user role    |employee name|status   |username         |password   |confirm password|
#     |Admin        |Lisa  Andrews|Enabled  |Henrique Braga   |           |                |
#     |ESS          |Lisa  Andrews|Disabled |Fanderson Kaecio |           |                |
#     Então vejo a mensagem de Required nos campos não preenchidos


# Cenario:   Submeter um cadastro com password invalido
#     Eclico no botao Add
#     Quando submeto o seguinte formulario de cadastro
#     |user role    |employee name|status   |username         |passwor    |confirm password|
#     |Admin        |Lisa  Andrews|Enabled  |Henrique Braga   |teste123   |teste123        |
#     |ESS          |Lisa  Andrews|Disabled |Fanderson Kaecio |Teste123   |Teste123        |
#     |Admin        |Lisa  Andrews|Enabled  |Henrique Braga   |teste!     |teste!          |
#     |ESS          |Lisa  Andrews|Disabled |Fanderson Kaecio |teste1234! |teste1234!      |
#     Então vejo a mensagem de Required nos campos não preenchidos


