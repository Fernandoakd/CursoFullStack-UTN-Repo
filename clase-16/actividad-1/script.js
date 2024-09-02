/* 
    Hacer una funcion que reciba un array de nombres y un nombreAEliminar y retorne un nuevo array sin nombres igual a nombreAEliminar
    ejemplo:
    eliminarNombres(['pedro', 'predro', 'juan'], 'pedro') 
    debe retornar: ['juan']
*/

/*const nombres = ["fernando", "alejandro", "facundo", "alejandro", "aldo", "dante"]

function eliminarNombres(listaNombres, nombre) {
    while (listaNombres.includes(nombre)) {
        listaNombres.splice(listaNombres.indexOf(nombre),1)
    }
    return listaNombres
}

const listaSinAlejandro = eliminarNombres(nombres,"alejandro")
console.log("Lista resultante: " + listaSinAlejandro);*/

const historial = []

const llamadosFunciones = () => {
    let accion = prompt("Ingrese el nombre de la acción que desea realizar, puede ser: \n-Agregar acción \n-Eliminar acción por ID \n-Eliminar todo el historial")
    
    while (!accion || !isNaN(accion) || (accion !=="Agregar acción" && accion !=="Eliminar acción por ID" && accion !=="Eliminar todo el historial")) {
        accion = prompt("El valor ingresado no es válido, por favor ingrese un valor nuevamente:")
    }
    if (accion === "Agregar acción") {
        let id = prompt("Ingrese el valor del Id, debe ser numérico:")
        id = Number(id)
        while (!id || isNaN(id)) {
            id = prompt("El valor ingresado no es válido, por favor ingrese un valor numérico nuevamente:")
        }
        let descripcion = prompt("Ingrese el valor de la descripción, debe ser texto:")
        while (!descripcion || !isNaN(descripcion)) {
            descripcion = prompt("El valor ingresado no es válido, por favor ingrese un valor para descripción nuevamente:")
        } 
        agregarAccion(id,descripcion)
        console.log(`El estado actual de la lista historial, despues de aplicar la accion ${accion} es la siguiente: ${JSON.stringify(historial)}`);
        alert("Revise la consola")
        
    }else if (accion === "Eliminar acción por ID") {
        let id = prompt("Ingrese el valor del Id, debe ser numérico:")
        id = Number(id)
        while (!id || isNaN(id)) {
            id = prompt("El valor ingresado no es válido, por favor ingrese un valor numérico nuevamente:")
        }
        eliminarAccionPorId(id)
        console.log(`El estado actual de la lista historial, despues de aplicar la accion ${accion} es la siguiente: ${JSON.stringify(historial)}`);
        alert("Revise la consola")
    }else {
        eliminarTodo()
        console.log(`El estado actual de la lista historial, despues de aplicar la accion ${accion} es la siguiente: ${JSON.stringify(historial)}`);
        alert("Revise la consola")
    }
    let nuevaAccion = prompt("Desea realizar otra acción? \n-Si \n-No") 
    if (nuevaAccion && isNaN(nuevaAccion) && nuevaAccion === "Si") {
        llamadosFunciones()
    }
}

const agregarAccion = (identificador,descripcion) => {

    if(!historial.find((accion) => accion.id === identificador)){

        const nuevaAccion = {
            id : identificador,
            descripcion : descripcion,
            fecha : new Date().toISOString
        }

        historial.push(nuevaAccion);
    }else{
        alert("El id "+identificador+"ya existe")
    }
}

const eliminarAccionPorId = (id) => {

    let posicion = historial.findIndex((historial) => historial.id === id)
    historial.splice(posicion,1)
}

const eliminarTodo = () => {

    historial.splice(0,historial.length)
}

llamadosFunciones()