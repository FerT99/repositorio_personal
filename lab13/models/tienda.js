const productos = [{producto: "Carnazas"}, {producto: "Sueter"}, {producto: "Peine"}];

module.exports = class Productos {
    constructor(producto) {
        this.producto = producto;
    }

    save() {
        productos.push(this); //enviar producto a arreglo
    }

    static fetchAll() {
        console.log("los productos existentes son:", productos)
        return productos;
    }

}