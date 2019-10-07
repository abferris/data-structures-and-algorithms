'use strict'

 const mergeSort = require("./merge-sort.js").mergeSort;
 const stackandqueue = require('./stacksAndQueues.js');
 const Stack = stackandqueue.Stack;

//Implement a deck of cards. Should include methods for shuffle, deal, and insert a card
const suitesKey = ['clubs','diamonds', 'spades', 'hearts']


class Card{
  constructor(number, suite){
    this.number=number;
    this.suite=suite;
  }
}

class Hand {
  constructor(cards){
    this.suitesKey = ['clubs','diamonds', 'spades', 'hearts']
    if(cards && cards.length===4){
      // if make a hand with correct suites
      this.clubs = cards[0];
      this.diamonds = cards[1];
      this.hearts = cards[2];
      this.spades = cards[3];
      this.cards = [this.clubs,this.diamonds,this.hearts,this.spades];
     } else if (!cards) {
      // if no input, an empty  hand is established
      this.clubs = [];
      this.diamonds = [];
      this.hearts = [];
      this.spades = [];
      this.cards = [this.clubs,this.diamonds,this.hearts,this.spades];
    } else {
      // if there is an input (which should be an array)
      this.clubs = [];
      this.diamonds = [];
      this.hearts = [];
      this.spades = [];
      this.cards = [this.clubs,this.diamonds,this.hearts,this.spades];
      this.unsortedCards = cards
    }
  }

  //sort takes in your cards and whatever cards are unsorted
  sort(){
    // look at unsorted cards, and if there are any insert the number into the correct suite
    for (let i = 0; i < this.unsortedCards.length; i++){
      let j=0;
      //stop counting if you hit the right suite or go through all suites
      while( this.suitesKey[j]!==this.unsortedCards[i].suite && j<this.suitesKey[j].length){
        j++;
      }
      if (j===4){
        this.cards = [];
        return `Cannot sort ${this.unsortedCards[i]}. Aborting!`
      }
      this.cards[j].push(this.unsortedCards[i].number)
    }
    // do a quicksort of the cards in every suite lowest to highest
    for (let k=0; k<this.cards.length; k++){
      mergeSort(this.cards[k]);
    }
  }

  count(){
    // first count the number of cards
    let cardsInHand = 0
    for (let i = 0; i < this.cards.length; i++){
      cardsInHand += this.cards[i].length;
    }
    // if it's not 13 return an error
    if (cardsInHand !== 13){
      return "Not Correctly Dealt Hand"
    }
    //points start at zero
    // only highcard points
    let highCardPoints = 0;
    // adding to points by counting long suites as points
    let pointsWithLength = 0;
    // adding to points by counting short suites as points
    let pointsWithShort = 0
    //iterate through each suite
    for (let i = 0; i < this.cards.length; i++){
      //look at length
      let suiteLength = this.cards[i].length; 
      // shortPoints is 3-length
      let shortPoints = 3-suiteLength;
      shortPoints > 0 ? pointsWithShort+=shortpoints : null ;
      lengthPoints = suiteLength - 4;
      lengthPoints > 0 ?  pointsWithLength+=lengthPoints : null ;

      // if shortPoints is more than zero add it to points with short
      // lengthPoints is length-4
      // if lengthPoints is more than zero add it to points with length
      //iterate through each card
      for (let j = 0; j < this.cards[i].length; j++){
        // if card is a jack(11) and length is more than 2 add 1 to all counts
        // if card is a queen(12) and length is more than 2 add 2 to all counts
        // if card is a king and(13) length is more than 1 add 3 to all counts
        // if card is a ace(14) add 4 points to all counts
      }


    }
  }
}

class Deck {
  constructor() {
    this.suitesKey = ['clubs','diamonds', 'spades', 'hearts']
    this.clubs = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    this.diamonds = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    this.hearts = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    this.spades = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    this.cards = [clubs,diamonds,hearts,spades]
    this.stack= new Stack
  }

  shuffle(){
    let i = 52
    while( i > 0 ) {
      let suite
      let number
      let suiteNum
      let numberNum
      while(!suite || !number){
        suiteNum= Math.floor(Math.random()*suitesKey.length)
        numberNum = Math.floor(Math.random()*cards[suite].length)
      }
      //splice card out of deck
      suite = this

      let card = new Card(number,suite)

      this.stack.push(card)
    }
  }

}

class game{
  constructor(){
    this.deck = new Deck
    this.north = new Hand
    this.east = new Hand
    this.south = new Hand
    this.west = new Hand
  }

  deal(){
   this.deck.shuffle()
  }



}


