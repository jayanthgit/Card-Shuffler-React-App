// 52 cards
// 4 suits - club, diamond, heart, spades
// Total cards = 4 * 13
class Card {
    constructor(cardSuit, cardValue) {
        this.cardSuit = cardSuit;
        this.cardValue = cardValue;
    }    
}
  
class CardGame {
    constructor() {
        this.listOfCards = [];
        this.cardList = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        this.cardSuit = ['clubs', 'diamonds', 'hearts', 'spades'];
    }

    initializeCards = function () {
        for (let i = 0; i < this.cardSuit.length; i++) {
            let cardSuit = this.cardSuit[i];
            for (let j = 0; j < this.cardList.length; j++) {
                let cardValue = this.cardList[j];
                this.listOfCards.push(new Card(cardSuit, cardValue));
            }
        }
    }

    deal = function (numOfCards) {
        numOfCards = numOfCards || 5;
        numOfCards = numOfCards > this.listOfCards.length ? this.listOfCards.length : numOfCards;
        
        let retList = [];
        for (let i = 0; i < numOfCards; i++) {
            let randomIndex = Math.floor((Math.random() * this.listOfCards.length));
            retList.push(this.listOfCards[randomIndex]);
            this.listOfCards.splice(randomIndex, 1);
        }
        
        return retList;
    }
}

export default CardGame;