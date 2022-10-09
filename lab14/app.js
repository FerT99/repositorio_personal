const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({ //asegurar sesión única y encriptada
    secret: "Wjdsjwdkdkjfsfocuhewifbbvjdgweidjedhgeewwewejfwe",
    resave: false, //asegura que sesión no se cambia en cada petición sino cuando se haga un cambio 
    saveUninitialized: false, //asegura que no se guarde una sesión para una petición que no lo necesita
}));

const ruta_tienda = require("./routes/tienda.routes") //inicializar a la ruta
const ruta_usuario = require("./routes/usuario.routes")

app.use("/tienda", ruta_tienda); //para usar la ruta
app.use("/login", ruta_usuario)

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