setTimeout(() => console.log('codigo asincrono'), 4000);

const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'hola desde node');

const arreglo = [5000, 600, 90, 80, 7000, 500, 300, 200, 500, 20000];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}

//crear un servidor 
const http = require('http');

const server = http.createServer( (request, response) => {
    response.setHeader('Content-Type', 'text/html');
})

server.listen(5000);

//request.url es para obtener la url de la petición
//request.socket.remoteAddress es para obtener la dirección IP 

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