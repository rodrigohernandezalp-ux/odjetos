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

///paso 7 ---- total
const total = producto.precio * pedido.cantidad;
pedido.total = total

console.log("----paso 7 ---")
console.log(pedido);


///------------paso 8 copiar---------
console.log("paso 8")
const copiamala = producto;
copiamala.precio = 999;
console.log(producto.precio);
// va a imprimir 999 copiamala y producto a puenta al mismo objeto
// la variable no guarda el objeto guarda donde esta


producto.precio = 15;// lo dejamos como estaba

const copiabuena = {...producto};
copiabuena.precio = 1000;
console.log(producto.precio);//el horiginal quedo intacto

//-----paso 9 ---------
console.log("paso9");
const respuestaOK = {
    ok:true,
    data:pedido
};

const respuestaError = {
    ok:{
        mensaje:"El producto no esta disponible",
        detalles:[]
    }
};


console.log(respuestaOK);
console.log(respuestaError);