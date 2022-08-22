// console.warn("Cuidado")

// console.info("Esto es información")

// console.assert(1 === 1)

// console.error("Error")

// //Triple igual compara valor y tipo de dato
// //Doble igual compara valor únicamente

// alert("Esto es una alerta")

// const nombre = prompt("Cómo te llamas?")

// const is_somnoliento = confirm("Tienes sueño?")

// if (is_somnoliento) {
//     alert("Hay que dormir mejor hoy");
// } else {
//     alert("Has dormido bien estos días.")
// }


// boton.onclick = () => {
//     console.log("Click!");
//     document.getElementById("contenedor_imagen").innerHTML = 
//         '<img src="media/Lucky.jpg" alt="Lucky">';
// }

const boton_cambio_perrito = document.getElementById("cambiar_perrito");

boton_cambio_perrito.onclick = () => {
    console.log("click funciona");
    const imagen = document.getElementById("imagen");
    if (imagen.src == 'media/Lucky.jpg'){
        imagen.src = 'media/Moka.jpg';
    }
    
}

//let is_happy = false;

//const foto1 = () => {
//     const contenedor = document.getElementById("contenedor_imagen");
//     contenedor.innerHTML = '<img src="media/Moka.jpg" alt="Moka" width="400">';
//     boton_cambio_perrito.innerText = "Moka";
//     boton_cambio_perrito.style.backgroundColor = "#f48fb1";
//     //is_happy = true;
//     document.body.style.color = "#f48fb1";
// }

const foto2 = () => {
    const contenedor = document.getElementById("contenedor_imagen");
    contenedor.innerHTML = '<img src="media/Lucky.jpg" alt="Lucky" width="400">';
    boton_cambio_perrito.innerText = "Lucky";
    boton_cambio_perrito.style.backgroundColor = "#01579b";
    //is_happy = false;
}

const foto3 = () => {
    const contenedor = document.getElementById("contenedor_imagen");
    contenedor.innerHTML = '<img src="media/Rocky.jpg" alt="Lucky" width="400">';
    boton_cambio_perrito.innerText = "Rocky";
    boton_cambio_perrito.style.backgroundColor = "#01579b";
    //is_happy = false;
}

const foto4 = () => {
    const contenedor = document.getElementById("contenedor_imagen");
    contenedor.innerHTML = '<img src="media/Toby.jpg" alt="Lucky" width="400">';
    boton_cambio_perrito.innerText = "Toby";
    boton_cambio_perrito.style.backgroundColor = "#01579b";
    //is_happy = false;
}

//Default de la página
foto2();

boton_cambio_perrito.onclick = () => {
    if (foto1) {
        foto2();
    } else if (foto2) {
        foto3();
    } else {
        foto4()
    }
}