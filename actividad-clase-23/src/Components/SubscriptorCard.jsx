/* 
Crear un componente de subscripcion que reciba tambien la fecha y el rol  

Quiero que cada carta tengan las siguientes clases:
subscriptor-card
subscriptor-card-{rol}

Si el rol del subscriptor es premium entonces debe tener

subscriptor-card subscriptor-card-premium

pero si es admin

subscriptor-card subscriptor-card-admin

*/

import React from "react";

const SubscriptorCard = (props) => {
    return (
        <div className={`subscriptor-card subscriptor-card-${props.rol}`}>
            <span>Id: #{props.details.id}</span>
            <h3>{props.nombre}</h3>
            <p>{props.descripcion}</p>
            <span>
                <b>Fecha:</b> {props.fecha}
            </span>
            <div>{props.rol}</div>
            <hr />
        </div>
    );
};

export default SubscriptorCard;
