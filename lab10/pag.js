setTimeout(() => console.log('codigo asincrono'), 4000);

const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'hola desde node');

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
    
    }; 
});

const arreglo = [5000, 600, 90, 80, 7000, 500, 300, 200, 500, 20000];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}

//Una función que reciba un arreglo de números y devuelva su promedio.
function promedio(arreglo) {
    let suma = 0;
    for(let i of arreglo) {
        suma = suma + i;
        return suma;
    }
    let avg = suma/arreglo.length;
    return avg;
}

console.log("el promedio es", promedio(arreglo))


server.listen(5000);