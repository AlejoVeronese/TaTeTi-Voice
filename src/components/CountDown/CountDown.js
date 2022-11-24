import { useEffect, useState } from "react";
import './CountDown.css';

import mr1 from '../../media/mr1.jpeg';
import mr2 from '../../media/mr2.jpeg';
import mr3 from '../../media/mr3.jpeg';
import mr4 from '../../media/mr4.jpeg';

import { Howl, Howler } from 'howler';
import turnX from '../../media/TurnX.mp3';
import turnO from '../../media/TurnO.mp3';

const soundPlayX = new Howl({
    src: [turnX],
    autoplay: true,
});
const soundPlayO = new Howl({
    src: [turnO],
    autoplay: true,
});

Howler.autoUnlock = true;

export default function CountDown({seconds, changeTurn, turn}) { 
    const [count, setCount] = useState(seconds);

    useEffect(() => {
        if(turn === 'X') {
            soundPlayX.play();
        } else {
            soundPlayO.play();
        }
    }, [turn]);


    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [count]);

    useEffect(() => {
        setCount(seconds);
    }, [turn]);

    useEffect(() => {
        if (count === 0) {
            setCount(seconds);
            changeTurn();
        }
    }, [count, seconds]);
    
    return (
        <div id="countdown" className="countdown">
            <h3>Tiempo del turno: " <span className={turn == 'X' ? "redT" : "blueT"}>{turn}</span>  "</h3>
            <span className={count < 6 ? "red" : "white"}>{count}<img src={count > 7 ? mr1 : count > 5 ? mr2 : count > 2 ? mr3 : mr4} alt="mr" className="mr"/></span>
            {count > 5 && <h3 className="greenAlert">Puede Jugar !!</h3>}
            {count < 6 && <h3 className="redAlert">Estas por perder el Turno !!</h3>}
        </div>
    );
}