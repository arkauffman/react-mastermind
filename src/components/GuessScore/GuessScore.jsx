import React from 'react';

const GuessScore = (props) => {
  let scores = [];
  for (let i = 0; i < props.score.perfect; i++) { scores.push('P'); };
  for (let i = 0; i < props.score.almost; i++) { scores.push('A'); };
  for (let i = 0; i < 4 - props.score.perfect - props.score.almost; i++) { scores.push('I'); };
  return (
    <div>
      {scores.map((score, idx) => <div key={idx}>{score}</div>)}
    </div>
  );
}

export default GuessScore;