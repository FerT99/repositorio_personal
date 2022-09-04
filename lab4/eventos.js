/*1. Entrada: un número pedido con un prompt. 
Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. 
Utiliza document.write para producir la salida*/
//codigo html va entre comillas 
let usuario = prompt("Escribe un número: ");

function nums() {
  '<table>'
    for (let i = 0; i = usuario.length; i++) {
        '<tr>' +
        '<td>' + i + '</td>' +
        '<td>' + i * i + '</td>' + //cuadrados
        '<td>' + i * i * i + '</td>' + //cubos
        '</tr>'
    }
'</table>'
return nums();  
}

//mandar al HTML
document.getElementById('ejercicio1').innerHTML = nums();

/*2: Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. 
Salida: La página debe indicar si el resultado fue correcto o incorrecto, 
y el tiempo que tardó el usuario en escribir la respuesta.*/
let num_1 = Math.round(random(1, 100));
let num_2 = Math.round(random(1, 100));
let resCorrecto = num_2 + num_1;
let time = Date.now(); //regresa el tiempo que tarda en ingresar respuesta 

let resp = prompt('Ingresa el resultado de la suma de los siguientes nums:' + num_1 + ', ' + num_2 + ':' );

if (resp == resCorrecto) {
    console.log('Tu respuesta fue correcta!')
} else {
    console.log('Te equivocaste, el resultado es ' + resCorrecto)
}

document.getElementById("ejercicio2").innerHTML = nums(); 

/*3: Función: contador. Parámetros: Un arreglo de números. 
Regresa: La cantidad de números negativos en el arreglo, 
la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.*/

function contador() {
    let arreglo = [0, 2, -2, 3, -3, 4, -4, 5, 6, 10, -1, -8];
    let cont1 = 0;
    let cont2 = 0;
    let cont3 = 0;
    for (let i = 0; i = arreglo.length(); i++) {
        if (i === 0) {
            cont1 += 1;
        }
        else if (i < 0) {
            cont2 += 1;
        }
        else {
            cont3 += 1;
        }
    return cont1, cont2, cont3;
    }
}

document.getElementById('ejercicio3').innerHTML = contador();


/*4: Función: promedios. Parámetros: Un arreglo de arreglos de números. 
Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.*/

function promedios(matriz) {

let matriz = [
    [1, 2, 3, 4]
    [5, 6, 7, 8]
    [9, 10, 11, 12]
];

let cont = 0;
let avg = 0;
let nuevoArreglo = [];

    for (let i = 0; i = matriz.length; i++) {
        for (let j = 0; j = matriz.length; i++) 

        cont += 1;
        nuevoArreglo.push(cont/matriz.length);

    return nuevoArreglo;

    }
}

document.getElementById("ejercicio4").innerHTML = promedios();

/*5: Función: inverso. Parámetros: Un número. Regresa: El número con sus dígitos en orden inverso.*/
function inverso(n) {
    n = input('Escribe un número: ');

    let reverse = parseInt(
         n.toString().split("").reverse().join("")
    )
    return n;
}

document.getElementById("ejercicio5").innerHTML = inverso();

/*6: Crea una solución para un problema de tu elección (puede ser algo relacionado con tus intereses, 
alguna problemática que hayas identificado en algún ámbito, 
un problema de programación que hayas resuelto en otro lenguaje, 
un problema de la ACM, entre otros). El problema debe estar descrito en un documento HTML, 
y la solución implementada en JavaScript, utilizando al menos la creación de un objeto, 
el objeto además de su constructor deben tener al menos 2 métodos. 
Muestra los resultados en el documento HTML.*/

class Usuario {

    constructor(nombre, apellido, edad) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad
    }

    display() {
        return(this.nombre, this.apellido, this.edad);
    }

};

class crearTarea extends Usuario {

    constructor(tarea, fecha, estatus){
        this.tarea = tarea,
        this.fecha = fecha,
        this.estatus = estatus
    }
    display() {
        return(this.tarea, this.fecha, this.estatus);
    }
};

let pedro = new usuario("Pedro", "Perez", 31);
let carlos = new usuario("Carlos", "Larregui", 20);

let tarea1 = new crearTarea("Registrar", Date.now, "completado");
let tarea2 = new crearTarea("Tomar fotos", Date.now, "en proceso");

document.write("Tarea: " + crearTarea.display() + " creada por: " + usuario.display());

document.getElementById("ejercicio6").innerHTML = inverso();