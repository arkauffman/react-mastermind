import React from 'react';

const GuessPeg = (props) => {
  let style = {
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: '50%',
    backgroundColor: props.color,
    opacity: 0.85,
    // Add a border unless there's a color
    border: props.color || '1px dashed grey',
    cursor: props.currentGuess && 'pointer'
  };

  return (
    <div onClick={props.handleGuess} style={style} />
  );
}

export default GuessPeg;
