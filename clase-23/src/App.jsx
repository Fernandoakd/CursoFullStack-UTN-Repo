import React from 'react'
import { Formulario } from './Components/Formulario'
import { Titulo } from './Components/Titulo'
import Link from './Components/Link'

/* Un componente es una funcion (normal o en flecha) que devuelve JSX (Algo parecido a HTML pero con superpoderes) 
Un componente solo debe retornar un elemento padre 
Si queremos retornar 2 o mas hermanos sin un elemento padre podemos usar fragmentos 
Ejemplo: 
Sin fragmentos
  return(
    <div>
      <h1></h1>
      <h2></h2>
    </div>
  )
Con fragmentos
  return(
    <\>
      <h1></h1>
      <h2></h2>
    </>
   )

   Por ensima del return podemos hacer toda la logica de nuestro componente
   Las variables pueden guardar jsx
   Los componentes DEBEN IR EN MAYUSCULAS
*/

function App() {
  let nombre = 'pepecito'
  let resultado = <h1>No se quien soy</h1>
  if (nombre === 'pepe') {
    resultado = <h1>Soy pepe</h1>
  }
  return (
    <>    
      <div className='caja-1'>
        <Titulo text='pedro' descripcion='Titulo'/>
        hola {nombre}
        <Formulario/>
        <Link/>
      </div>
      <div>
        {resultado}
      </div>
    </>
  )
}

export default App
