function sumatoria(cantidad) {
    
    let resultado = 0
    for (let contador = 0; contador < cantidad; contador++) {
        let numero = prompt("Ingrese el valor del "+(contador+1)+"° número:")
        while(!numero || isNaN(numero)) {
            alert("El valor ingresado no es válido")
            numero = prompt("Ingrese el valor del "+(contador+1)+"° número nuevamente:")
        }

        numero = Number(numero) 
        resultado = resultado + numero       
    }

    return resultado
}

let sumaDos = sumatoria(2)
alert("El resultado de la sumatoria es: "+sumaDos)

function saludar(nombre) {

    if(!nombre || !isNaN(nombre)) {

        return "El valor ingresado no es válido"
    }else{

        let saludo = "Hola "+nombre
        return saludo
    }
}

let saludo = saludar("Fernando")
alert(saludo)

function seleccionar(operacion) {

    let operacionFinal = ""
    if (!operacion || !isNaN(operacion)) {

        return "El valor ingresado no es válido"
    } else {

        if (operacion == "sumar" || operacion == "+" || operacion == "add") {

            operacionFinal = "SUMAR"
        } else if (operacion == "restar" || operacion == "-" || operacion == "subtract") {

            operacionFinal = "RESTAR"
        } else if (operacion == "multiplicar" || operacion == "*" || operacion == "multiply") {

            operacionFinal = "MULTIPLICAR"
        } else {

            operacionFinal = null
        }
    }
    
    return operacionFinal
}

let valorOperacion = seleccionar("")
alert(valorOperacion)