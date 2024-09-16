import React from 'react'

const Titulo = (props) => {
    console.log(props);
    
    return (
        <h1 title={props.descripcion}>{props.text}</h1>
    )
}

export {Titulo}