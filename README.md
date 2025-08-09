# API de Transferências e Usuários

Esta API permite realizar operações de registro, login, consulta de usuários e transferências de valores entre usuários. O banco de dados é em memória, ideal para aprendizado de testes e automação de APIs.

## Instalação

1. Clone o repositório ou copie os arquivos para seu ambiente.
2. Instale as dependências:
   ```bash
   npm install express swagger-ui-express
   ```

## Como executar

- Para iniciar o servidor:
  ```bash
  node server.js
  ```
- A API estará disponível em `http://localhost:3000`.
- A documentação Swagger estará disponível em `http://localhost:3000/api-docs`.

## Endpoints

- `POST /register`: Registra um novo usuário. Campos obrigatórios: `username`, `password`. Opcional: `favorecido` (boolean).
- `POST /login`: Realiza login. Campos obrigatórios: `username`, `password`.
- `GET /users`: Lista todos os usuários cadastrados.
- `POST /transfer`: Realiza transferência entre usuários. Campos obrigatórios: `from`, `to`, `amount`.

## Regras de Negócio

- Não é permitido registrar usuários duplicados.
- Login exige usuário e senha válidos.
- Transferências para destinatários não favorecidos só podem ser feitas se o valor for menor que R$ 5.000,00.

## Testes

Para testar a API com Supertest, importe o arquivo `app.js` em seus testes, pois ele exporta a aplicação sem iniciar o servidor.

## Observações

- Todos os dados são armazenados em memória e serão perdidos ao reiniciar o servidor.
- Recomenda-se usar ferramentas como Postman ou Swagger para testar os endpoints.
