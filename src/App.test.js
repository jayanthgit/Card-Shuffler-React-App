import React from 'react';
import ReactDOM from 'react-dom';
import CardGame from './CardGame';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

test('check CardGame.deal(5)', () => {
  let game = new CardGame();
  game.initializeCards();

  let listOfCards = game.deal(5);
  expect(listOfCards.length).toBe(5);  
});

test('check CardGame.deal(55)', () => {
  let game = new CardGame();
  game.initializeCards();

  let listOfCards = game.deal(55);
  expect(listOfCards.length).toBe(52);  
});