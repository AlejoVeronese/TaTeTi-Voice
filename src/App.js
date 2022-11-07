import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import VozRecognition from './components/VozRecognition/VozRecognition';

const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


const App = () => {

  const [turn, setTurn] = useState('X');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winningSquares, setWinningSquares] = useState([]);
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });

  const reset = () => {
    setTurn('X');
    setSquares(Array(9).fill(null));
    setWinningSquares([]);
  }

  const checkForWinner = newSquares => {
    for(let i = 0; i < winningPositions.length; i++) {
      const [a,b,c] = winningPositions[i];
      if(newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]) {
        endGame(newSquares[a], winningPositions[i]);
        return
      }
    }

    if(!newSquares.includes(null)) {
      endGame(null, Array.from(Array(10).keys()));
      return
    }
    setTurn(turn === 'X' ? 'O' : 'X');
  }

  const handleClick = square => {
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    checkForWinner(newSquares);
  }

  const handleVoice = (voice) => {
    let newSquares = [...squares];
    let square = null;
    if (voice === 'uno' || voice === '1') {
      square = 0;
    }
    if (voice === 'dos' || voice === '2') {
      square = 1;
    }
    if (voice === 'tres' || voice === '3') {
      square = 2;
    }
    if (voice === 'cuatro' || voice === '4') {
      square = 3;
    }
    if (voice === 'cinco' || voice === '5') {
      square = 4;
    }
    if (voice === 'seis' || voice === '6') {
      square = 5;
    }
    if (voice === 'siete' || voice === '7') {
      square = 6;
    }
    if (voice === 'ocho' || voice === '8') {
      square = 7;
    }
    if (voice === 'nueve' || voice === '9') {
      square = 8;
    }
    if (voice === 'reiniciar') {
      reset();
    }
    if(square !== null && newSquares[square] === null) {
      newSquares.splice(square, 1, turn);
      setSquares(newSquares);
      checkForWinner(newSquares);
    }
  }

  const endGame = (result, winningPositions) => {
    setTurn(null);
    if(result !== null) {
      setScore({
        ...score,
        [result]: score[result] + 1,
      })
    }
    setWinningSquares(winningPositions);
    setTimeout(reset, 2000);
  }

  return (
    <div className="container">
      <h1 className="title">Ta Te Ti</h1>
      <h2 className="description"> Diga un numero entre el 1 y el 9 o "reiniciar" si asi lo desea</h2>
      <Board winningSquares={winningSquares} turn={turn} squares={squares} onClick={handleClick}/>
      <ScoreBoard scoreO={score.O} scoreX={score.X} />
      <br></br>
      <br></br>
      <VozRecognition onVoice={handleVoice} />
    </div>
  );
}

export default App;
