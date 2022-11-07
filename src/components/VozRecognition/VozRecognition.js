import './VozRecognition.css';
import { useState } from 'react';

const VozRecognition = ({onVoice}) => {
    const [voice, setVoice] = useState(null);
    
    const handleVoice = () => {
        const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
        recognition.lang = 'es-ES';
        recognition.start();
        recognition.onresult = (event) => {
        const speechToText = event.results[0][0].transcript;
        setVoice(speechToText);
        onVoice(speechToText);
        }
    }

    return (
        <div className="VozRecognition">
        <button onClick={handleVoice}>Escuchar</button>
        <h2 className="voiceText">Usted ha dicho: {voice}</h2>
        {voice === 'uno' || voice === '1' || voice === 'dos' || voice === '2' || voice === 'tres' || voice === '3' || voice === 'cuatro' || voice === '4' || voice === 'cinco' || voice === '5' || voice === 'seis' || voice === '6' || voice === 'siete' || voice === '7' || voice === 'ocho' || voice === '8' || voice === 'nueve' || voice === '9' || voice === 'reiniciar' || voice === null ? <></> : <h3 className="incorrect">Incorrecto</h3>}
        </div>
    );
    }

export default VozRecognition;