setTimeout(() => console.log('codigo asincrono'), 4000);

const filesystem = require('fs');

//crear un servidor 
const http = require('http');

const server = http.createServer( (request, response) => {
    console.log(request.url)
    console.log(request.socket.remoteAddress)

    if(request.url === "/hola") {
    response.setHeader('Content-Type', 'text/html'); //envía el sobre
    response.write("<!DOCTYPE html>");
    response.write('<head><meta charset="utf-8"></head>');
    response.write("<h1>Hola!</h1>"); //contenido de la carta 
    response.end(); //hace que respuesta se envíe al cliente 
    
    }
    else if (request.url === "/tienda"){
        response.setHeader('Content-Type', 'text/html'); //envía el sobre
    response.write("<!DOCTYPE html>");
    response.write('<head><meta charset="utf-8"></head>');
    response.write("<h1>Bienvenido a la tienda de perritos!</h1>"); //contenido de la carta 
    response.write("<h1>Dejanos consentir a tu mascota</h1>");
    response.end();
    }

    else if (request.url === "/regalo") {
        let html = '<!DOCTYPE html>' + 
        '<head><meta charset="utf-8"></head>' +
        "<h1>¿Qué regalo le daremos a tu mascota?</h1>" + 
        '<form action="regalo" method="POST">' +
        '<fieldset>' +
        "<legend>Regalo</legend>" + 
        '<label for="sueter">Sueter</label><input type="foto" name="sueter" id="sueter' + //id sirve del lado del cliente, name del lado del servidor
        '<label for="carnaza">Carnaza</label><input type="foto" name="carnaza" id="carnaza' +
        '</fieldset>' + //agrupa en una caja
        "</form>"; 
        filesystem.writeFileSync('hola.txt', 'entraste a la trivia!');
        response.send(html)
    }
    else {
        response.statusCode = 404; //manda error 404
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>');
        response.write("<h1>ERROR 404 0.0</h1>");
        response.write("<h3>No existe esta página, intenta una ruta diferente.</h3>");
    }
});

server.listen(5000);