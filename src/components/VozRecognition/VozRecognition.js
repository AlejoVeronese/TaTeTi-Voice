import './VozRecognition.css';
import { useState } from 'react';

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
    const recognition = new window.SpeechRecognition();
    recognition.lang = 'es-ES';
    recognition.interimResults = true;
    recognition.continuous = false;
    recognition.addEventListener('result', (e)=>{
        console.log("Frase:",e.results[0][0].transcript)
        const speechToText = e.results[0][0].transcript;
        let res=toString(speechToText)
        setVoice(res);
        onVoice(speechToText);

    })
    recognition.addEventListener('end',()=>{
    recognition.start();
    })
    recognition.start();

    // const handleVoice = () => {
    //     const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
    //     recognition.lang = 'es-ES';
    //     recognition.continuous = false
    //     recognition.start();
    //     recognition.onresult = (event) => {
    //     const speechToText = event.results[0][0].transcript;
    //     let res=toString(speechToText)
    //     setVoice(res);
    //     onVoice(speechToText);
    //     }
    // }

    return (
        <div className="VozRecognition">
        {/* <button onClick={handleVoice}>Escuchar</button> */}
        {possibilities.includes(voice) || voice === null ? <h2 className="voiceText">Usted ha dicho: {voice}</h2> : <h3 className="incorrect">Incorrecto</h3>}
        </div>
    );
    }

export default VozRecognition;
