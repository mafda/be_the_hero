# Segundo dia

* Node.js & Express

    * Rotas e recursos:
        * `localhost:3333/users/` rota
        * `app.get('/users', ...)` recurso

    * Métodos HTTP
        * GET: Buscar/listar uma informação do back-end
            * `app.get(..`
        * POST: Criar uma informação no backend
        * PUT: Alterar uma informação no back-end
        * DELETE: Deletar uma informação no back-end

    * Tipos de parâmetros
        * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros,
          paginação..)
            *  http://localhost:3333/users?name=Fernanda
        * Route Params: Parâmetros utilizados para identificar recursos
            * `app.get('/users/:id', ...)`
            *  http://localhost:3333/users/1
        * Request Body: Corpo da requisição, utilizado para criar ou alterar
          recursos
            * `app.get('/users/:id', ...)`
                * const params = request.params;

* Utilizando o Insomnia
    * HTTP and GraphQL client for developers
    * `yay -Sy insomnia`
        * Create workspace
        * New Request > Test > (method) POST
        * http://localhost:3333/users
            * `app.post('/users', ...)`

* Configurando Nodemon
    * para não reiniciar o servidor
    * `npm install nodemon -D`
    * `package.json`
        * "start": "nodemon index.js"
    * `npm start`

* Diferenças entre bancos de dados
    * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc.
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    * `npm install knex`
    * `npm install sqlite3`
    * `npx knex init` > knexfile.js

* Pensando nas entidades e funcionalidades
    * Algo que vai ser salvo no banco de dados
    * Entidades:
        * ONG
        * Caso (incident)
    * funcionalidades:
        * Login de ONG
        * Logout de ONG
        * Cadastro de ONG
        * Cadastrar novos casos
        * Deletar casos
        * Listar casos especificos de uma ONG
        * Listar todos os casos
        * Entrar em contato con a ONG
    * `npx knex migrate:make create_ongs`
    * `npx knex migrate:latest`
    * `npx knex migrate:make create_incidents`

* Construção do back-end

* Adicionando módulo CORS
    * `npm install cors`

* Enviando back-end ao Github
