const filesystem = require("fs");
//writeFileSync se usa para escribir en el txt

//Una función que reciba un arreglo de números y devuelva su promedio.
function arreglo() {
    arreglo = [1, 2, 3, 4, 5, 6, 7, 9];
    let suma = 0;
    let avg = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += i;
        avg = suma/arreglo.length;
    }
    console.log(avg);
    return avg;
}

arreglo();
// Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.
function recibeStr(str) {
    filesystem.writeFileSync("hola.txt", str); //primer parametro es el archivo txt, segundo es el valor de la string
  }
  
  recibeStr("hola desde node!");
  recibeStr("texto se reescribe");

// Escoge algún problema que hayas implementado en otro lenguaje de programación, 
// y dale una solución en js que se ejecute sobre node.

function simuladorCarrito() {
    lista = ["carne", "papas", "jamon", "chocolates"];
    for (let i = 0; i < lista.length; i++) {
        console.log(lista);
    }
}

simuladorCarrito();
