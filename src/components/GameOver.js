import React from 'react';
import './GameOver.css';


let GameOver = (props) => {
  return <div className="game-over">
    <h1 className="title">Game Over!</h1>
    <button onClick={props.gameActions.startNewGame}>Try Again</button>
  </div>;
};

export default GameOver;
