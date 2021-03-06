//import express from express;
const express =  require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);//servidor http fora do express, podendo, agora, trabalhar com ele diretamente

setupWebSocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-xqfuj.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.use(cors());
app.use(express.json());//json precisa vir antes
app.use(routes);

//MÉTODOS HTTP: GET, POST, PUT, DELETE

//TIPOS DE PARÂMETROS:
//Query Params: request.query (filtros, ordenação, paginação, ...)
//Route Params: request.params: (Identificar um recurso na alteração ou remoção) //PUT e DELETE
//Body:  request.body: (Dados para criação ou alteração de um registro) //POST e PUT

//MongoDB (não-relacional)

app.get('/', (request, response) => {
     return response.json({ message: 'Hello oskoakosa'});
});

server.listen(3333);

