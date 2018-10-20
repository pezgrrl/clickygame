import React, { Component } from 'react';
import queens from './queens.json';
import Wrapper from './components/Wrapper';
import QueenCard from './components/QueenCard';
import { Jumbotron , Button } from 'reactstrap';
import './App.css';

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    message: "Click an image to begin.",
    queens: queens,
    unselectedQueens: queens
  };

 
  shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      };
  };


  handleButtonClick = event => {
      event.preventDefault();
      this.setState({
        currentScore: 0,
        topScore: 0,
        message: "Click an image to begin.",
        allQueens: queens,
        unselectedQueens: queens
      });
  };

  
  selectQueen = selectQueenName => {
    
    const findQueens = this.state.unselectedQueens.find(queen => queen.queenName === selectQueenName);

    if (findQueens === undefined) {
        this.setState({
            message: "You guessed incorrectly!",
            topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
            currentScore: 0,
            allQueens: queens,
            unselectedQueens: queens
        });
    }
   
    else {
        const newUnselectedQueens = this.state.unselectedQueens.filter(queen => queen.queenName !== selectQueenName);

        this.setState({
            message: "You guessed correctly!",
            currentScore: this.state.currentScore + 1,
            allQueens: queens,
            unselectedQueens: newUnselectedQueens
        });
    };

    
    this.shuffleArray(queens);
  };

  render() {
    return (
      <div>           
        <div className="App">
            <Jumbotron>
                <h2 className="App-title">Drag Queen Clicky Game</h2>
                <p className="message">+++++++++++++++++++++++++++++++</p>
                <p className="message">{this.state.message}</p>
                <p className="message">Current Score: {this.state.currentScore}</p>
                <p className="message">Top Score: {this.state.topScore}</p>
                <Button color="danger" onClick={this.handleButtonClick}>Start Over </Button>
            </Jumbotron>
        </div>
        <Wrapper>
            {
              this.state.queens.map(queens => (
                  <QueenCard 
                      key={queens.id}
                      queenName = {queens.queenName}
                      image = {queens.image}
                      currentScore = {this.state.currentScore}
                      selectQueen = {this.selectQueen}
                  />
              ))
            }
      </Wrapper>
      </div>
    );
  };
};

export default App;