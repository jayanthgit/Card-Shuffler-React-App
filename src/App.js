import React, { Component } from 'react';
import './App.css';
import ChessComponent from './CardComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Card Shuffler</h2>
        </div>
        <br/>
        <div>
          <ChessComponent/>
        </div>
      </div>
    );
  }
}

export default App;