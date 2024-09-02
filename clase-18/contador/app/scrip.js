let contador = 1
const btnDecrementar = document.getElementById("btn-decrementar")
const btnIncrementar = document.getElementById("btn-incrementar")
const contadorHtml = document.getElementById("contador-text")
const errorMessage = document.querySelector('.error-text')

const setContadorHtml = (nuevoValor) => {
    contadorHtml.innerText = nuevoValor
}

const setErrorMessage = (message) => {
    errorMessage.innerText = message
}

const incremento = () => {
    if (contadorHtml.innerText < 10) {
        setContadorHtml(++contador)
        if (errorMessage.innerText !== "") {
            setErrorMessage("")
        }
    }else{
        setErrorMessage("El contador no puede ser mayor de 10")
    }

}

const decremento = () => {
    if (contadorHtml.innerText > 1) {
        setContadorHtml(--contador)
        if (errorMessage.innerText != "") {
            setErrorMessage("")
        }
    }else{
        setErrorMessage("El contador no puede ser menor a 1")
    }
}


setContadorHtml(contador)
setErrorMessage("")
btnDecrementar.addEventListener("click",decremento)
btnIncrementar.addEventListener("click",incremento)