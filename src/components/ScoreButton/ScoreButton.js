import React from 'react';

const ScoreButton = (props) => {
  return (
    <button className="btn btn-default" style={{padding: '2px 6px'}} disabled={props.disabled} onClick={props.handleScoreCheck} >
      ✔
    </button>
  );
}

export default ScoreButton;
