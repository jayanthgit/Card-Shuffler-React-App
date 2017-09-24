import React, { Component } from 'react';
import './CardComponent.css';
import CardGame from './CardGame';
import './App.css';

const images = importAll(require.context('./cardssvg', false, /\.(png|jpe?g|svg)$/));

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { 
    return images[item.replace('./', '')] = r(item); 
  });
  return images;
}

class CardComponent extends Component {
  constructor() {
    super();
    
    this.game = new CardGame();
    this.game.initializeCards();

    this.state = {imageNames: []};    
  }

  initializeCards() {
    this.game.initializeCards();
    this.setState({imageNames: []})
  }

  fetchCards() {
    console.log('fetchCards clicked');
    let listOfCards = this.game.deal(5);
  
    let names = [];
    for (let i = 0; i < listOfCards.length; i++) {
        let str = `${listOfCards[i].cardValue.toLowerCase()}_of_${listOfCards[i].cardSuit.toLowerCase()}.svg`;
        names.push(str);
    }

    console.log(names);
    this.setState({imageNames: names})
  }

  render() {
    return (
        <div>
            <div>
                <button onClick={this.fetchCards.bind(this)}>
                  Deal Cards
                </button>
                <button onClick={this.initializeCards.bind(this)}>
                  Initialize Deck
                </button>
            </div>
            <br/>
            <div>
                <img className="ImgClass" src={images[this.state.imageNames[0]]} alt=""/>
                <img className="ImgClass" src={images[this.state.imageNames[1]]} alt=""/>
                <img className="ImgClass" src={images[this.state.imageNames[2]]} alt=""/>
                <img className="ImgClass" src={images[this.state.imageNames[3]]} alt=""/>
                <img className="ImgClass" src={images[this.state.imageNames[4]]} alt=""/>
            </div>        
        </div>
    );
  }
}

export default CardComponent;