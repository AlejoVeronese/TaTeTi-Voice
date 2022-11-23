import { useEffect, useState } from "react";
import './CountDown.css';

export default function CountDown({seconds, changeTurn, turn}) { 
    const [count, setCount] = useState(seconds);
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
        <div className="countdown">
            <h3>Tiempo del turno: " {turn} "</h3>
            <span className={count < 6 ? "red" : "white"}>{count}</span>
        </div>
    );
}