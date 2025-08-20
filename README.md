# API de Usuários

 Esta API permite realizar operações de registro de login.
 O banco de dados é em memória.

 ## Estrutura projeto

1. .github/workflows/ci.yml
Aqui está a configuração de CI/CD (integração contínua) usando o GitHub Actions. No arquivo ci.yml é definido como o projeto será testado ou implantado automaticamente. 

2. controller/
Contém os arquivos que recebem as requisições HTTP e chamam os serviços apropriados.
userController.js: controla ações relacionadas a usuários (login, cadastro, etc).

3. model/
Contém os arquivos que representam a estrutura dos dados ou entidades do banco de dados.
userModel.js: modelo do usuário, normalmente define campos, tipos e validações.

4. service/
Contém a lógica de negócio da aplicação, isolada do controller.
userService.js: lógica de manipulação de dados de usuários (ex: CRUD, autenticação, regras de negócio).

5. test/
Contém testes automatizados.
controller/userController.test.js: testes unitários ou de integração do controller de usuários

6. app.js
Onde é inicilizado a aplicação Express, configura middlewares, rotas e exporta o app para o server ou para testes.

7. server.js
Arquivo que efetivamente inicia o servidor.

8. package.json & package-lock.json
Gerenciam dependências, scripts e metadados do projeto.

9. swagger.json
Definição da API para documentação via Swagger - OpenAPI.

10. .gitignore
Pastas e arquivos que não serão versionados pelo Git.

11. README.md
Arquivo onde contém anotações do projeto.


## Instalação
1. Realizado a instalação das dependências:
    1.1 Sinon: Biblioteca para mocks, stubs.Permite isolar partes do código, como o Service, para testar só o Controller.
    1.2 Mocha: Framework de testes para Node.js.Estrutura os testes em blocos describe (grupo) e it (casos de teste).
    1.3 SuperTest: Biblioteca para testar rotas HTTP de um app Express.Faz requisições reais ao app sem precisar subir o servidor de verdade.
    1.4 Chai: Biblioteca de asserções, valida resultados esperados.Trabalha junto com Mocha ou outro test runner.


## Como executar

- Para iniciar o servidor:
   comando:  npm start

- A API estará disponível em `http://localhost:3000`.
- A documentação Swagger estará disponível em `http://localhost:3000/api-docs`.

## Endpoints

- `POST /register`: Registra um novo usuário. Campos obrigatórios: `username`, `password`.
- `POST /login`: Realiza login. Campos obrigatórios: `username`, `password`.


## Como executar Testes

- Para rodar os testes
  comando: npx mocha 
Deve realizar o comando dentro da pasta onde está localizado o arquivo teste.


## Regras de Negócio

- Não é permitido registrar usuários duplicados.
- Login exige usuário e senha válidos.
- Algumas validações de registro de login.


## Testes

Para testar a API com Supertest, importe o arquivo `app.js` em seus testes, pois ele exporta a aplicação sem iniciar o servidor.

## Observações

- Todos os dados são armazenados em memória e serão perdidos ao reiniciar o servidor.
- Utilizar Swagger para testar os endpoints disponíveis.
