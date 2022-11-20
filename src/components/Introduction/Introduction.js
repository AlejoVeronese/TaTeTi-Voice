import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Game from '../Game/Game';

const Introduction=()=>{
    const [start,setStart] = useState(false);
    const HandleStart=()=>{
        setStart(true)
    }
    return(
        <div className="container">
            {start === true ?<Game/>:<div className="container">
            <h1 className="title">Ta Te Ti</h1>
            <h1>Bienvenido al Ta Te Ti por Voz</h1>
            <ReactPlayer url="../../media/never.mp4" className="react-player" playing={true} width='75%' height='75%'/>        
            <button onClick={HandleStart}>Comenzar</button></div>}
        </div>
    );
}





export default Introduction;