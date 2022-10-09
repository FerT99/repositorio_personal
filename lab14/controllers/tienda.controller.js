const path = require("path");
const filesystem = require("fs");
const Producto = require("../models/tienda");

mostrar = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};

enseñarProductos = (request, response, next) => {
    response.render('tienda', {productos: Producto.fetchAll()});
}

postNuevoProducto = (request, response, next) => {
    const productoNuevo = new Producto(request.body.producto);
    productoNuevo.save();
    response.status(303);
    response.redirect('/tienda');
}

module.exports = {
    mostrar,
    enseñarProductos,
    postNuevoProducto
}