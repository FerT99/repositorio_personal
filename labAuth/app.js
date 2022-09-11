const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(_dirname, 'public'))); //evita procesamiento extra 

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
//use es para definir un middleware
//response - le enviamos respuesta de vuelta al cliente
//next - ejecutamos si queremos que se avance al siguiente middleware

app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/hola', (request, response, next) => {