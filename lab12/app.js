const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const ruta_tienda = require("./routes/tienda.routes") //inicializar a la ruta
//use es para definir un middleware
//response - le enviamos respuesta de vuelta al cliente
//next - ejecutamos si queremos que se avance al siguiente middleware

app.use("/tienda", ruta_tienda); //para usar la ruta

app.use((request, response, next) => {
    console.log('Todo funciona correctamente');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use("/inicio", (request, response, next) => {
    response.send("¡Bienvenido a la tienda DoggyShop!")
});

app.use("/seccion1", (request, response, next) => {
    response.send("Aquí encuentras lo que necesitas");
})

app.use("/seccion2", (request, response, next) => {
    response.send("Aquí también encuentras lo que necesitas");
})

app.use("/checkout", (request, response, next) => {
    response.send("¡Aceptamos todos los métodos de pago!");
})

//error 
app.use((request, response, next) => {
    response.statusCode = 404;
    console.log("algo no funciona correctamente")
    response.send('Ocurrió un error'); 
});

app.listen(3000);