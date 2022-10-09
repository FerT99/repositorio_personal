const path = require("path");
const filesystem = require("fs");
const Perro = require("../models/perro");

mostrar = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};

module.exports = {
    mostrar,
}