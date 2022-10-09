const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const ruta_tienda = require("./routes/tienda.routes") //inicializar a la ruta

app.use("/tienda", ruta_tienda); //para usar la ruta

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((request, response, next) => {
    console.log('Todo funciona correctamente');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

//error 
app.use((request, response, next) => {
    response.statusCode = 404;
    console.log("algo no funciona correctamente")
    response.send('Ocurrió un error'); 
});

app.listen(3000);