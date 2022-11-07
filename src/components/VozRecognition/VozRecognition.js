import './VozRecognition.css';
import { useState } from 'react';

const VozRecognition = ({onVoice}) => {
    const [voice, setVoice] = useState(null);
    
    const handleVoice = () => {
        const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
        recognition.lang = 'es-ES';
        recognition.continuous = false
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
        {voice === 'uno' || voice === 'Uno' || voice === '1' || voice === 'dos' || voice === 'Dos' || voice === '2' || voice === 'tres' || voice === 'Tres' || voice === '3' || voice === 'cuatro' || voice === 'Cuatro' || voice === '4' || voice === 'cinco' || voice === 'Cinco' || voice === '5' || voice === 'seis' || voice === 'Seis' || voice === '6' || voice === 'siete' || voice === 'Siete' || voice === '7' || voice === 'ocho' || voice === 'Ocho' || voice === '8' || voice === 'nueve' || voice === 'Nueve' || voice === '9' || voice === 'reiniciar' || voice === 'Reiniciar' || voice === null ? <></> : <h3 className="incorrect">Incorrecto</h3>}
        </div>
    );
    }

export default VozRecognition;
