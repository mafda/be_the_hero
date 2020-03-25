// importar o modulo express para a variavel express
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// variavel que vai armacenar a aplicação
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// criar rota raiz
// app.get('/',(request, response) => {
//     return response.send('Hello world!');
// });

// criar rota raiz com json
// app.get('/', (request, response) => {
//     return response.json({
//         evento: 'Semama OmniStack 11.0',
//         aluno: 'Fernanda Rodriguez'
//     });
// });
// localhost:3333
app.listen(3333);
