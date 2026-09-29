// ejercicio : el mostrador  version de referencia

/// ---- paso 1 y 2 funciones normales
function calculartotal(precio, cantidad = 1){
    return precio * cantidad;
};

function espedidovalido(cantidad){
    return cantidad>8;
};

function formatearprecio(monto){
    return "$" + monto.toFixed(2);
};

console.log("---paso 1 y 2----")
console.log(calculartotal(35,2));
console.log(calculartotal(35));
console.log(espedidovalido(0));
console.log(formatearprecio(35));

//---paso 3 las mismas funciones en flecha corta------
const calculartotal2 = (precio,cantidad=1)=> precio * cantidad;
const espedidovalido2 =(cantidad) => cantidad >0;
const formatearprecio2 =(monto) => "$" + monto.toFixed(2);
console.log("----paso3-----")
console.log(calculartotal2(35,2));
console.log(calculartotal2(35));
console.log(espedidovalido2(0));
console.log(formatearprecio2(35));
console.log("diego rodrigo gael hernandez najera")