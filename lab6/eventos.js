function validar() {
 
    let contra1 = document.getElementById('pass1').innerHTML;
    let contra2 = document.getElementById('pass2').innerHTML;
   
if (pass1.value == pass2.value) {
 
        //Muestra msj de error si contraseñas no coinciden
    alert("Las contrasenias coinciden!");
    
    document.getElementById("btn-login").disabled = false;

    // Simulación de refresh de la página con función asíncrona
    setTimeout(function() {
        location.reload();
    }, 3000);
 
 return true;

} else {

    alert("Intenta de nuevo!");

        // Desabilitamos el botón de login 
    document.getElementById("btn-login").disabled = true;
 
    return false;
    }
 
}

login.addEventListener('click', validar) //segundo parametro es la funcion
