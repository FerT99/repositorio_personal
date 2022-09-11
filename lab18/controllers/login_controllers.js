const path = require("path");
const filesystem = require("fs");

exports.getLogin = (require, response, next) => {
    const usuario = request.session.usuario ? request.session.usuario: '';
    response.render('login', {
        usuario: usuario //poder llamar usuario en otra vista
    });
}

exports.login = (request, response, next) => {
    if(usuario.login(request.body.nombre, request.body.contraseña)) {
        request.session.usuario = request.session.nombre;
        response.redirect('/perros/');
    } else {
        response.redirect('/usuarios/login');
    }
}

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/usuarios/login');
    })

   bcrypt.compare(request.body.password, user.password)
   .then(doMatch => {
       if (doMatch) {
           request.session.isLoggedIn = true;
           request.session.user = user;
           return request.session.save(err => {
               response.redirect('/');
           });
       }
       response.redirect('/login');
   }).catch(err => {
       response.redirect('/login');
   });

   exports.getAccion = (request, response, next) => {
    response.render('/ruta', {
        csrfToken: request.csrfToken()
    });
}
}