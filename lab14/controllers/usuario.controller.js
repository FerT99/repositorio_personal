const path = require("path");
const filesystem = require("fs");


getLogin = (require, response, next) => {
    const usuario = request.session.usuario ? request.session.usuario: '';
    response.render('usuario', {
        usuario: usuario 
    });
}

login = (request, response, next) => {
    if(usuario.login(request.body.nombre, request.body.contraseña)) {
        request.session.usuario = request.session.nombre;
        response.redirect('/tienda/');
    } else {
        response.redirect('/login/usuario');
    }
}

logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/login/usuario');
    })

    module.exports = {
        getLogin,
        login,
        logout
    }
}