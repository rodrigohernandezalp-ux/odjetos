//Datos y metodos de un objeto
//ficha de menu
//los datos son distintos a proposito. compara la FORMA no el contenido
const producto = {
    id: "p-07",
    nombre:"agua de melon",
    precio:15,
    categoria:"bebida",
    disponible:true,
    // metodos
    resumen(){
        return this.nombre + " - $ " + this. precio + "(" + this.categoria + ")"

    }


     ,estadisponible(){
        return this.disponible;
    }

};

console.log("paso 1 - imprimiendo el producto");
console.log(producto);

//paso 2 - tres formas de leer
console.log("-------paso 2 -----");
const campo = "nombre";
console.log(producto.nombre);
console.log(producto["nombre"]);
console.log(producto[campo]);

console.log("-----paso 3 ----");
console.log(producto.resumen());
console.log(producto.estadisponible());

//--------paso 4 El usuario -------
const usuario = {
    id:"u-03",
    nombre:"mamilo",
    correo:"mamilo@cbtis258.edu.mx",
    rol:"alumno",
    telefono:81374954
};


// ------ paso 5 ------
const pedido = {
    follo:"pr-0118",
    cliente: usuario,
    producto: producto,
    cantidad: 3,
    estado:"pendiente"
}

console.log("---paso 5----")
console.log(pedido.cliente.nombre);
console.log(pedido.producto.precio);
console.log(pedido.cliente.telefono);



// paso 6 - Desestructuracion
console.log("-----paso 6 -----");
const {nombre, precio} = producto;
console.log(nombre, precio);

const {cantidad, nota = "sin nota"} = pedido;
console.log(cantidad, nota);
console.log("Diego Rodrigo Gael Hernandez Najera")
