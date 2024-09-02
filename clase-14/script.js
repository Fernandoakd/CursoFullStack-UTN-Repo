/* Solicitar un numero entre 1 y 10 al usuario, si el numero es mayor a 10 O menor a 1 deberemos decir por alerta 'Dato incorrecto' caso contrario decir 'dato correcto' */

// let numero = prompt("Ingrese un número del 1 al 10")
// if (numero > 10 || numero < 1) {
//     alert("Dato incorrecto")
// } else {
//     alert("Dato correcto")
// }

// Solicitar al usuario un nombre y una edad

// si el nombre es 'juan' decir 'bienvenido don juan
// si el nombre es 'pepe'  y su edad es 21 decir 'pase don'
// si la edad es mayor a 30 decir 'puede pasar'
// si no es ninguno de los anteriores decir 'no puede pasar'

let nombre = prompt("Ingrese su nombre")
let edad = prompt("Ingrese su edad")

if (nombre == "juan") {
    alert("Bienvenido don juan")
}
else if (nombre == "pepe" && edad == 21) {
    alert("pase don")
}
else if (edad > 30) {
    alert("puede pasar")
}
else{
    alert("no puede pasar")
}