import './App.css';
import Introduction from './components/Introduction/Introduction';
import { useState } from 'react';
import Game from './components/Game/Game';
import VozRecognition from './components/VozRecognition/VozRecognition';

const App = () => {
  const [intro,setIntro] = useState(true);
  const [game,setGame] = useState(false);
  const [voice,setVoice] = useState(null);

  const handleRecognition = (voice) =>{
    if(intro && voice==="comenzar"){
        setIntro(false);
        setGame(true);
    }
    if(game && voice==="salir"){
        setGame(false);
        setIntro(true);
    }
    if(game && voice && !intro){setVoice(voice);}
  }
  return (
    <div className="container">
      <VozRecognition onVoice={handleRecognition}/>
      {intro ? <Introduction/>: null }
      {game ? <Game voice={voice}/>: null }
    </div>
  );
}

export default App;
