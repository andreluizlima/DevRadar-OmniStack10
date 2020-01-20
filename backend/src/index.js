const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const http = require('http');
const dotenv = require('dotenv');

const { setupWebSocket } = require('./websocket')

const app = express();
const server  = http.Server(app);

setupWebSocket(server);

dotenv.config();

console.log(process.env.CONEXAO_DB);
mongoose.connect(process.env.CONEXAO_DB, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);


//Métodos HTTP: Get, Post, Put, Delete

//Tipos parametros
//Query params: request.query (filtros, ordenação, paginação, ...)
//Route params: request.params (Identificar um recurso na alteração/remoção)
//Body: request.body (Dados para criação/alteração de um registro)