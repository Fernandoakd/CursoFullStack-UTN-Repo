/*1)
Crear una funcion que reciba un array de letras y se encargue de devolver un string con todas las letras concatenadas
Ejemplo:
concatenar(['a', 'b', 'c'])
devolvera 'abc'
*/

// function concatLetras(letras){
//     let cadena = ""
//     for (const letra of letras) {
//         cadena = cadena + letra
//     }
//     return cadena
// }
// let letras = ["A","B","C","D"]
// let palabra = concatLetras(letras)
// alert("El resultado es: "+palabra)

/*
2)
Crear una funcion que reciba un array de numeros y devuelva el mayor de todos
Ejemplo:
mayor([2, 3, 4, 5, 6])
devolvera 6*/

function numeroMayor(numeros) {
    let mayor = null
    if(numeros.length > 0){
        if (numeros.length === 1) {
            return numeros[0]
        }else{
            for (let index = 0; index < numeros.length; index++) {
                if(mayor < numeros[index]){
                    mayor = numeros[index]
                }
            }
        }
        return mayor
    }
}
let numeros = [1,"as"]
let mayor = numeroMayor(numeros)
alert("El resultado es: "+mayor)

/*
3)
Crear una funcion llamada calcular, que reciba una operacion (la cual puede ser '+', '-', '*', '/') y dos numeros y devuelva el resultado de la operacion
Ejemplo:
calcular('+', 2, 3)
devolvera 5*/