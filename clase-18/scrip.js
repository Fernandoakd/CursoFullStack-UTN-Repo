// const nombres = ["pepe","juan","raul"]
// const nombresEnObjeto = nombres.map((nombre) => {
//     return {nombre: nombre}
// })
// console.log(nombresEnObjeto);



// const carritoModificado = carrito.map((producto) => {
//     if (producto.productoId === 3) {
//         producto.cantidad = producto.cantidad - 1
//     }
//     return producto
// })
// console.log(carritoModificado);

//Dado este carrito generar otro carrito donde el producto con id 3 tenga su cantidad en 1 menos
//Ejemplo:
/* 
const carrritoMofificado = [
    {
        productoId: 1,
        cantidad: 2
    },
    {
        productoId: 2,
        cantidad: 4
    },
    {
        productoId: 3,
        cantidad: 89
    }
]

Crear una funcion que se llame quitarProductoDelCarrito que recibira el array de carrito y el id del producto a decrementar
y devolvera un nuevo array con la estructura original del carrito, pero el producto que su id sea igual al id recibido tendra su 
cantidad decrementada en 1

 */

const carrito = [
    {
        productoId: 1,
        cantidad: 2
    },
    {
        productoId: 2,
        cantidad: 4
    },
    {
        productoId: 3,
        cantidad: 90
    }
]

const quitarProductoDelCarrito = (carritoAModificar,idProducto) => {
    const nuevoCarrito = carritoAModificar.map((producto)=>{
        if (producto.productoId === idProducto) {
            producto.cantidad = producto.cantidad - 1
        }
        return producto
    })
    return nuevoCarrito
}

const carritoModificado = quitarProductoDelCarrito(carrito,2)
console.log(`Nuevo carrito modificado: ${JSON.stringify(carritoModificado)}`);

