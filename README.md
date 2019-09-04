# Desafio 02 - Bootcamp Gostack 8

## Descrição

- Nesse código eu desenvolvo minha leitura do desafio 2 da segunda fase do Bootcamp Gostack 8 - Rocketseat 2019
- A aplicação é um a base para um agregador de eventos chamado Meetapp. O restante da aplicação será desenvolvido ao longo do tempo conforme eu for avançando no treinamento no bootcamp.
- Esse modulo do projeto Meetapp é responsável por gravar no banco (PostgreSQL) de forma criptografada as informações dos usuários cadastrados (Criar e editar) bem como a validação feita de todos os dados enviados pela API afim de evitar possíveis inconsistências.
- V1.0

## Bibliotecas
As bibliotecas utilizadas nesse modulo foi:
- bcryptjs
- express
- jsonwebtoken
- pg
- pg-hstore
- sequelize
- yup

## Rotas

### Criando Usuários

- Método: `POST`
- URL: http://localhost:3333/users
- Parâmetro: Body
- Autenticação: Não :unlock:

  ```js
  {
    "name": "Juca",
	  "email": "juca@terra.com",
	  "password": "123456"
  }
  ```

### Editando Usuários

- Método: `PUT`
- URL: http://localhost:3333/users
- Parâmetro: Body
- Autenticação: Bearer Token :closed_lock_with_key:

  ```js
  {
    "name": "Juca",
    "email": "juca2@terra.com",
    "oldPassword": "123456",
    "password": "1234567",
    "confirmPassword": "1234567"
  }
  ```

### Gerando Token

- Método: `POST`
- URL: http://localhost:3333/sessions
- Parâmetro: Body
- Autenticação: Não :unlock:

  ```js
  {
	  "email": "juca@terra.com",
	  "password": "123456"
  }
  ```
