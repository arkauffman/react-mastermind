import React from 'react';
import GuessPeg from '../GuessPeg/GuessPeg';
import './GuessPegs.css';

const GuessPegs = (props) => {
  return (
    <div className="GuessPegs">
      <GuessPeg 
        color={props.colors[props.code[0]]} 
        currentGuess={props.currentGuess} 
        handleGuess={() => props.handleGuess(0)} 
      />
      <GuessPeg 
        color={props.colors[props.code[1]]} 
        currentGuess={props.currentGuess} 
        handleGuess={() => props.handleGuess(1)} 
      />
      <GuessPeg 
        color={props.colors[props.code[2]]} 
        currentGuess={props.currentGuess} 
        handleGuess={() => props.handleGuess(2)} 
      />
      <GuessPeg 
        color={props.colors[props.code[3]]} 
        currentGuess={props.currentGuess} 
        handleGuess={() => props.handleGuess(3)} 
      />
    </div>
  );
}

export default GuessPegs;
