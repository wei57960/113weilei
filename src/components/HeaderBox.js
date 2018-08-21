import React from 'react';
import './HeaderBox.css';

const ScoreBox = ({ label, score, children }) => {
  return (
    <div className="score-box">
      <div className="score-label">{label}</div>
      <div className="score-content">{score}</div>
      {children}
    </div>
  );
};


const HeaderBox = (props) => {
  return (
    <div className="header-box">
      <h1 className="title">2048</h1>
      <ScoreBox score={props.scores.score} label="SCORE">
      {
        props.scores.recentAddedScores.map((score) =>
          <div className="addition-score" key={score.id}
            onAnimationEnd={(e) => props.gameActions.cleanRecentAddedScore(score.id)}
          >+{score.score}</div>
        )
      }
      </ScoreBox>
      <ScoreBox score={props.scores.bestScore} label="BEST" />
      <div className="desc-txt">
        <span>Keypressing up down left right on PC</span><br/>
        Touch moving on Phone! Join it & have fun! 
      </div>
      <button className="new-game-btn" onClick={props.startNewGame}>Restart</button>
    </div>
  );
};

export default HeaderBox;

