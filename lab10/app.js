setTimeout(() => console.log('codigo asincrono'), 4000);

const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'hola desde node');

//crear un servidor 
const http = require('http');

//request.url es para obtener la url de la petición
//request.socket.remoteAddress es para obtener la dirección IP 
const server = http.createServer( (request, response) => {
    console.log(request.url)
    console.log(request.socket.remoteAddress)

    if(request.url === "/hola") {
    response.setHeader('Content-Type', 'text/html'); //envía el sobre
    response.write("<!DOCTYPE html>");
    response.write('<head><meta charset="utf-8"></head>');
    response.write("<h1>Hola!</h1>"); //contenido de la carta 
    response.end(); //hace que respuesta se envíe al cliente 
    
    }  else if (request.url === "/trivia" && request.method === "GET" /*obtener un recurso*/) {
        response.setHeader('Content-Type', 'text/html'); //envía el sobre
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="utf-8"></head>');
        response.write("<h1>Pregunta algo</h1>"); //contenido de la carta
        response.write('<form action="trivia" method="POST">'); 
        response.write('<fieldset>');
        response.write("<legend>Equipos</legend>");  
        response.write('<label for="visitante">Visitante</label><input type="text" name="visitante" id="visitante'); //id sirve del lado del cliente, name del lado del servidor
        response.write('<label for="local">Local</label><input type="text" name="local" id="local');
        response.write('</fieldset>') //agrupa en una caja
        response.write("</form>"); 
        response.end(); //hace que respuesta se envíe al cliente 
        } 
        else if (request.url === "/trivia" && request.method === "POST" /*enviar info (cuando quieras una respuesta luego de picarle al botón*/) {
            response.setHeader('Content-Type', 'text/html'); //envía el sobre
            response.write("<!DOCTYPE html>");
            response.write('<head><meta charset="utf-8"></head>');
            response.write("<h1>El resultado es: </h1>"); //contenido de la carta
            response.write("</form>"); 
            response.end(); 
            } else if (request.url === "/trivia" && request.method === "POST") {
               const datos = [];
               request.on('data', (dato) => {
                console.log(dato);
                datos.push(dato);
                console.log(datos)
               });
               return request.on('end', () => {
                const datos_completos = Buffer.concat(datos).toString(); //concatenar datos y transformar a string
                console.log(datos_completos);
                return response.end();
               })
                } else {
        response.setHeader('Content-Type', 'text/html'); //envía el sobre
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="utf-8"></head>');
        response.statusCode = 404;
        response.write("<h1>El documento solicitado no existe</h1>");
        response.end();
    }
});

server.listen(5000);
