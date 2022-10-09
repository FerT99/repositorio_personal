const usuario = [];

module.exports = class Usuario { 
    constructor(usuario, nombre, contraseña) {
        this.usuario = usuario;
        this.nombre = nombre;
        this.contraseña = contraseña;
    }

    save(){
        usuario.push(this);
    }

    static fetchAll() {
        console.log(usuario)
        return true;
    }
}