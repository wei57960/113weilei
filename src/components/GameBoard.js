import React from 'react';
import HeaderBox from './HeaderBox';
import GameOver from './GameOver';
import Tiles from './Tiles';
import './GameBoard.css';

const BackgroundGrids = ({ size }) => {
  let row = i => {
    return new Array(size).fill().map((_, j) =>
      <div className="grid-cell" key={`grid-cell-${i * size + j}`}></div>
    );
  };
  let grids = new Array(size).fill().map((_, i) => row(i));

  return (
    <div className="grid-container">{grids}</div>
  );
};


const GameBoard = (props) => (
  <div className="game-board">
    <HeaderBox scores={props.scores} gameActions={props.gameActions}/>
    <div className="game-box">
      <BackgroundGrids size={props.size} />
      <Tiles flattenTiles={props.flatTiles} />
      {props.gameOver && <GameOver gameActions={props.gameActions}/>}
    </div>
  </div>
);



export default GameBoard;

