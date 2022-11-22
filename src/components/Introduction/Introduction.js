import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import VozRecognition from '../VozRecognition/VozRecognition';
const Introduction=()=>{

    return(
        <div className="container">
            <h1 className="title">Ta Te Ti</h1>
            <h1>Bienvenido al Ta Te Ti por Voz</h1>
            <ReactPlayer url="../../media/never.mp4" className="react-player" playing={true} width='75%' height='75%'/>
            {/* <button onClick={()=>handleStart('comenzar')}>Comenzar</button> */}
        </div>
    );
}





export default Introduction;