//limpiar codigo
//crear servidor

const http = require("http");
const filesystem = require("fs");

const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/html");
    response.write(filesystem.readFileSync("doc.html")); //doc para escribir
    response.end();
  });
  
server.listen(5000); //puerto