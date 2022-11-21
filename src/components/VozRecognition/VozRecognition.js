import './VozRecognition.css';
import { useState, useEffect } from 'react';

const toString = (entry)=>{
    let res=""
    if (typeof entry !== "string") {
        res =entry.toString();
    }
    else{
        res=entry.toLowerCase();
    }
    return res
}
const possibilities = ['1','2','3','4','5','6','7','8','9',
                    'uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve',
                    'reiniciar']

const VozRecognition = ({onVoice}) => {
    const [voice, setVoice] = useState(null);
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    console.log("Estoy escuchando")
    const recognition = new window.SpeechRecognition();
    recognition.lang = 'es-ES';
    recognition.interimResults = false;
    useEffect(() => {

        recognition.addEventListener("result",(e)=> {
            console.log("Frase:",e.results[0][0].transcript)
            const speechToText = e.results[0][0].transcript;
            let res=toString(speechToText)
            setVoice(res);
            onVoice(res);
        })
        recognition.addEventListener("end",() =>{
            recognition.start()
        });
        recognition.start();
    }, [voice])
    

    return (
        <div className="VozRecognition">
        {/* <button onClick={handleVoice}>Escuchar</button> */}
        {possibilities.includes(voice) || voice === null ? <h2 className="voiceText">Usted ha dicho: {voice}</h2> : <h3 className="incorrect">Incorrecto</h3>}
        </div>
    );
    }

export default VozRecognition;
