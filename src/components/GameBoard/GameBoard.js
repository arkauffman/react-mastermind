import React from 'react';
import GuessRow from '../GuessRow/GuessRow';
import './GameBoard.css';

const GameBoard = (props) => {
  return (
    <div className="GameBoard">
      {props.guesses.map((guess, idx) => 
        <GuessRow
          winGame={props.winGame}
          handleGuess={props.handleGuess}
          guess={guess}
          colors={props.colors}
          rowIdx={idx}
          currentGuess={idx === (props.guesses.length - 1)}
          key={idx}
          handleScoreCheck={props.handleScoreCheck}
        />
      )}
    </div>
  );
}

export default GameBoard;
