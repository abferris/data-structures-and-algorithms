'use strict';

// Card has a number and a Suite.
// Suite must be a string limited only to Clubs, Diamonds, Hearts or Spades
// Number must be an integer 2-14 only

class Card{
  constructor(number, suite){
    if (Number.isInteger(number) && number>1 && number<15 &&
    Number.isInteger(suite) && suite>=0 && suite<4) {
      this.number=number;
      this.suite=suite;
    } else {
      console.error("incorrect input")
      return null
    }
  }
}

module.exports = Card