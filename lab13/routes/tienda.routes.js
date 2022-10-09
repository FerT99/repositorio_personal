const express = require('express');
const path = require('path')
const filesystem = require("fs");
const tiendaController = require('../controllers/tienda_controller');

const router = express.Router();

const productos = [{producto: "Carnazas"}, {producto: "Sueter"}, {producto: "Peine"}];

router.get('/tienda', tiendaController.mostrar); //html

router.get('/', tiendaController.enseñarProductos);

router.get('/nuevo', tiendaController.postNuevoProducto);

module.exports = router;