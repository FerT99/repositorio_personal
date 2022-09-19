const express = require('express');

const filesystem = require("fs");

const router = express.Router();

const pedidos = [];

//rutas html
router.get('/tienda', (request, response, next) => {
    let ans = '<!DOCTYPE html><html lang="es-mx"><head><title>DoggyShop.</title><meta charset="utf-8"></meta></head><body><h1>DoggyShop.</h1><main><h2>DoggyShop - todo para tu perrito.</h2><p>¡Déjanos consentir a tu cachorro!</p></body></html>'
    response.send(ans)
});

router.get('/seccion1', (request, response, next) => {
    let ans = '<!DOCTYPE html><html lang="es-mx"><head><title>DoggyShop.</title><meta charset="utf-8"></meta></head><body><h1>Comida.</h1><main><h2>Variedad de croquetas para tu perrito.</h2><p>Hay para todas las razas.</p></body></html>'
    response.send(ans)
});

router.get('/seccion2', (request, response, next) => {
    let ans = '<!DOCTYPE html><html lang="es-mx"><head><title>DoggyShop.</title><meta charset="utf-8"></meta></head><body><h1>Suéteres calientitos.</h1><main><h2>Variedad de suéteres para tu perrito.</h2><p>Hay para todas las razas.</p></body></html>'
    response.send(ans)
});

router.get('/checkout', (request, response, next) => {
    let ans = '<!DOCTYPE html><html lang="es-mx"><head><title>DoggyShop.</title><meta charset="utf-8"></meta></head><body><h1>Sección de pagos.</h1><main><h2>Aceptamos todos los métodos de pago.</body></html>'
    response.send(ans)
});

router.get('/solicitarProducto/', (request, response, next) => {
    response.render("pedidos");
}); //mostrar pag de pedidos

router.post('/solicitarProducto', (request, response, next) => {
    console.log(request.body.pedido);
    pedidos.push(request.body.pedido);
    filesystem.writeFileSync('pedidos.txt', request.body.pedido);
    response.status(303);
    response.redirect('/tienda');
})

module.exports = router;