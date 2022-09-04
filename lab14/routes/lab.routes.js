const express = require('express');
const path = require('path');
const controller = require('../controllers/lab_controller.js');

const app = express();

router.get('/lab', labController.getLab)

app.get('/trivia', (request, response, next) => {
    let html = '<!DOCTYPE html>' + 
    '<head><meta charset="utf-8"></head>' +
    "<h1>¿Qué bebida te toca tomar hoy?</h1>" + 
    '<form action="trivia" method="POST">' +
    '<fieldset>' +
    "<legend>Bebidas</legend>" + 
    '<label for="cafe">Cafe</label><input type="text" name="cafe" id="cafe' + //id sirve del lado del cliente, name del lado del servidor
    '<label for="jugo">Jugo</label><input type="text" name="jugo" id="jugo' +
    '</fieldset>' + //agrupa en una caja
    "</form>"; 
    response.send(html)
})


app.post('/trivia', (request, response, next) => {
    if (Math.floor(Math.random() * 2) == 0) {
        response.send('<h2>El ganador es: ' + request.body.visitante + '</h2>')
    } else {
        response.send('<h2>El ganador es: ' + request.body.local + '</h2>')
    }
})

ganadores.push(ganador)