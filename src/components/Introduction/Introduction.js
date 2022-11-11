import { useState } from 'react';
import Game from '../Game/Game';

const Introduction=()=>{
    const [start,setStart] = useState(false);
    const HandleStart=()=>{
        setStart(true)
    }
    return(
        <div className="container">
            {start === true ?<Game/>:<div class="container">
            <h1 className="title">Ta Te Ti</h1>
            <h1>Bienvenido al Ta Te Ti por Voz</h1>
            <button onClick={HandleStart}>Comenzar</button></div>}
        </div>
    );
}





export default Introduction;