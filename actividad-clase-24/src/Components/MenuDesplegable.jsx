import React from 'react'
import { useState } from 'react'

const MenuDesplegable = () => {
    const [menuAbierto, setMenuAbierto] = useState(true)

    const abrirMenu = () => {
        setMenuAbierto(!menuAbierto)
    }
    
  return (
    <div>
        <button type="button" onClick={abrirMenu}>{!menuAbierto ? "Abrir" : "Cerrar"}</button>
        {
            menuAbierto && 
            <div>
                    <br />
                    <button type="button">Opcion 1</button>
                    <hr />
                    <button type="button">Opcion 2</button>
                    <hr />
                    <button type="button">Opcion 3</button>
                    <hr />
                    <button type="button">Opcion 4</button>
                    <hr />
                    <button type="button">Opcion 5</button>
                    <hr />
                    <button type="button">Opcion 6</button>
                    <hr />
                </div>
        }
    </div>
  )
}

export default MenuDesplegable