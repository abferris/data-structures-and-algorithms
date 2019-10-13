let mergeSort = require('./merge-sort.js')

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
      this.unsortedCards=[];
     } else if (!cards) {
      // if no input, an empty  hand is established
      this.clubs = [];
      this.diamonds = [];
      this.hearts = [];
      this.spades = [];
      this.cards = [this.clubs,this.diamonds,this.hearts,this.spades];
      this.unsortedCards=[];
    } else {
      // if there is an input (which should be an array)
      this.clubs = [];
      this.diamonds = [];
      this.hearts = [];
      this.spades = [];
      this.cards = [this.clubs,this.diamonds,this.hearts,this.spades];
      this.unsortedCards = cards
    }
    this.next = null;
    this.partner = null
  }
  //sort takes in your cards and whatever cards are unsorted
  sort(){
    // look at unsorted cards, and if there are any insert the number into the correct suite
    for (let i = 0; i < this.unsortedCards.length; i++){
      let s = this.unsortedCards[i].suite;
      let c = this.unsortedCards[i].number;
      this.cards[s].push(c);
    }
    // do a quicksort of the cards in every suite lowest to highest
    for (let j=0; j<this.cards.length; j++){
      mergeSort(this.cards[j]);
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
    let highCardPoints = {overall:0, bySuite:[0,0,0,0]};

    let shortDistribution =0
    //iterate through each suite
    for (let i = 0; i < this.cards.length; i++){
      //look at length
      let suiteLength = this.cards[i].length; 
      // shortPoints is 3-length
      let shortPoints = 3-suiteLength;
      shortPoints > 0 ? shortDistribution.bySuite[i]+=shortpoints : null ;
      lengthPoints = suiteLength - 4;
      lengthpoints > 3 ? lengthpoints = 3 : null;
      lengthPoints > 0 ?  lengthDistribution.bySuite[i]+=lengthPoints : null ;

      // if shortPoints is more than zero add it to points with short
      // lengthPoints is length-4
      // if lengthPoints is more than zero add it to points with length
      //iterate through each card
      for (let j = 0; j < this.cards[i].length; j++){
        let pointsToAdd = 0;
        let val = this.cards[i][j]-10;
        // if card is a jack(11) and length is more than 2 add 1 to all counts  
        // if card is a queen(12) and length is more than 2 add 2 to all counts
        // if card is a king and(13) length is more than 1 add 3 to all counts
        // if card is a ace(14) add 4 points to all counts
        //condition
        //if jack and 3 cards or cards+facecardvalue is 4 or more
        (val===1 && suiteLength>2) || (val>1 && suiteLength+value >= 4) ? pointsToAdd = val : null
        highCardPoints += pointsToAdd[i];
      }
    }

    return highCardPoints;

  }

}

module.exports = Hand