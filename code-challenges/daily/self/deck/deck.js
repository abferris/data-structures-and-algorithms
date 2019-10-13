'use strict';

 const Card = require("../card/card.js");
 const Hand = require("../hand/hand.js");
 const mergeSort = require("../hand/merge-sort.js/index.js").mergeSort;
 const stackandqueue = require('./stacksAndQueues.js');
 const Stack = stackandqueue.Stack;

//Implement a deck of cards. Should include methods for shuffle, deal, and insert a card
const suitesKey = ['clubs','diamonds', 'spades', 'hearts']




class Deck {
  constructor() {
    this.suitesKey = ['clubs','diamonds', 'spades', 'hearts']
    this.clubs = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    this.diamonds = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    this.hearts = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    this.spades = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    this.cards = [clubs,diamonds,hearts,spades];
    this.stack = new Stack ();
  }

  shuffle(){
    let i = 52
    while( i > 0 ) {
      let suite;
      let selectedCard;
      while( !this.cards[suite][selectedCard] ){
        suite= Math.floor(Math.random()*suitesKey.length);
        selectedCard = Math.floor(Math.random()*cards[suite].length);
      }
      //splice card out of deck
      let number = this.cards[suite].splice(selectedCard, selectedCard+1);
      let card = new Card(number,suite)

      this.stack.push(card)
    }
  }

}

class Game{
  constructor(dealer){
    this.deck = new Deck();

    this.north = new Hand();
    this.east = new Hand();
    this.south = new Hand();
    this.west = new Hand();
    //circular linked list and partner is across
    this.north.next = this.east;
    this.north.partner = this.south;
    this.east.next = this.south;
    this.east.partner = this.west;
    this.south.next = this.west;
    this.south.partner = this.north;
    this.west.next = this.north;
    this.west.partner = this.east;
    //setting dealer. Default (incorrect input or no input dealer is north)
    if (dealer === "east"){
      this.dealer = this.east;
    }
    if (dealer === "south"){
      this.dealer = this.south;
    }
    if (dealer === "west"){
      this.dealer = this.west;
    }else{
      this.dealer = this.north;
    }

  }

  deal(){
    this.deck.shuffle()
    let current = dealer.next;
    while(this.deck.stack.top){
     let card =this.deck.stack.pop();
     current.unsortedCards.push(card);
     current=current.next;
    }
    for(i=0; i<4; i++){
      current.sort();
      current=current.next
    }
  }



}

module.exports = {Deck, Card, Hand, Game};