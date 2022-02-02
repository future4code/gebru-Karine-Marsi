import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={props.imagem} />
            <div>
                <p><b>{props.label}:</b> {props.labeldescricao}</p>


            </div>
        </div>
    )
}

export default CardPequeno;