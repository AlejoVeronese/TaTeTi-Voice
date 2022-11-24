import "./Introduction.css";
import React from 'react';
const Introduction=()=>{

    return(
        <div className="container">
            <h1 className="title">Bienvenido al Ta Te Ti por Voz</h1>
            <h1 className="title" style={{color:"rgb(255,160,122)"}}>Instrucciones</h1>
            <h3 className="description">⚫ Para ingresar al juego di "Comenzar"</h3>
            <h3 className="description">⚫ Para jugar, di el número de la casilla que quieras marcar (1-9)</h3>
            <h3 className="description">⚫ Apurate, solo tienes 10 Segundos !!</h3>
            <h3 className="description">⚫ Para reiniciar el juego, di "Reiniciar"</h3>
            <h3 className="description">⚫ Para salir del juego, di "Salir"</h3>
        </div>
    );
}





export default Introduction;