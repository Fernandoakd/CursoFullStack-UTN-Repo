import React from 'react'

function App() {
  let usuario = 'Fer'
  let compartir = true
  let cargandoVista = false
  if (compartir) {    
    cargandoVista = true;
    setTimeout(() => {      
      cargandoVista = false;
      console.log(cargandoVista);
    }, "5000");
  } 

  return (
    <div>
      {
        compartir
        ?
        (
          
           cargandoVista
           ?
            <span>Cargando vista de {usuario}</span>
           :
            <img src="../Screenshot_1.png" alt="img" />
          
        )
        :
        <span>Aun nadie esta compartiendo</span>
      }
    </div>
  )
}

export default App
