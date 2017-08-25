import React, { Component } from 'react';
import './App.css';
// Must import components used in the JSX
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import NewGameButton from './components/NewGameButton/NewGameButton';

let headFootStyle = {
  height: 50,
  padding: 10,
  margin: '15px 0',
  color: 'grey',
  fontSize: 18,
  textAlign: 'center'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
 }

  getInitialState() {
    let colors = ['#155765', '#57652A', '#AB9353', '#4D2C3D'];
    return {
      colors,
      code: this.genCode(colors.length),
      selColorIdx: 0,
      guesses: [this.getNewGuess()],
      winGame: false
    };
  }

  getNewGuess() {
    return {
      code: [null, null, null, null],
      // code: [3, 2, 1, 0], // for testing purposes
      score: {
        perfect: 0,
        almost: 0
      }
    };
  }

  genCode(size) {
    return new Array(size).fill().map(dummy => Math.floor(Math.random() * size));
  }

  getWinTries() {
    // if winner, return num guesses, otherwise 0 (no winner)
    let lastGuess = this.state.guesses.length - 1;
    return this.state.code.join() === this.state.guesses[lastGuess].code.join() ? lastGuess + 1 : 0;
  }

  /* Event handlers */
  handleColorSelection = (colorIdx) => {
    if (this.state.winGame) return;
    this.setState({selColorIdx: colorIdx});
  }

  handleGuess = (guessIdx) => {
    if (this.state.winGame) return;
    var guesses = [...this.state.guesses];
    guesses[this.state.guesses.length - 1].code[guessIdx] = this.state.selColorIdx;
    this.setState({
      guesses
    });
  }

  handleNewGameClick = () => {
    this.setState(this.getInitialState());
  }

  checkPerfectScore(currentGuess, currentCode) {
    var matched = 0;
    currentGuess.code.forEach((num1, idx) => {
      if (num1 === currentCode[idx]) {
        matched++;
      }
    });
    return matched;
  }
  
  checkAlmostScore(currentGuess, currentCode) {
    var almost = 0;
    currentGuess.code.forEach((num1) => {
      if (currentGuess.code.indexOf(num1) !== currentCode.indexOf(num1) && currentGuess.code.indexOf(num1) && currentCode.indexOf(num1)) {
        almost++;
      }
    });
    return almost;
  }

  handleScoreCheck = () => {
    if (this.state.winGame) return;
    var currentGuess = Object.assign({}, this.state.guesses[this.state.guesses.length - 1]);
    var currentCode = [...this.state.code];
    currentGuess.score.perfect = this.checkPerfectScore(currentGuess, currentCode);
    currentGuess.score.almost = this.checkAlmostScore(currentGuess, currentCode);
    var guesses = [...this.state.guesses];
    
    if (!this.getWinTries()) {
      guesses.push(this.getNewGuess());
      this.setState({guesses});
    } else {
      this.setState({winGame: true});
    }
    console.log(this.state.code);
  }

  render() {
    let winTries = this.getWinTries();
    return (
      <div className="App">
        <header style={headFootStyle}>R E A C T &nbsp;&nbsp; M A S T E R M I N D</header>
        <div className="App-game">
          <GameBoard
            winGame={this.state.winGame}
            handleGuess={this.handleGuess}
            guesses={this.state.guesses}
            colors={this.state.colors}
            handleScoreCheck={this.handleScoreCheck}
          />
          <div className="App-controls">
            <ColorPicker
              handleColorSelection={this.handleColorSelection}
              selColorIdx={this.state.selColorIdx}
              colors={this.state.colors}
            />
            <NewGameButton handleNewGameClick={this.handleNewGameClick} />
          </div>
        </div>
        <footer style={headFootStyle}>{(this.state.winGame ? `You Won in ${winTries} Guesses!` : 'Good Luck!')}</footer>
      </div>
    );
  }
}

export default App;
