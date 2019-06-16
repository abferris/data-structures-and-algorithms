'use strict';

let HT = require('../hashtable.js').HashTable;

const repeats = (string) => {
  if (typeof(string) !== 'string'){
    return null;
  }
  let normalize = string.toLowerCase();
  let words = normalize.split(/[ ?!,.]+/);
  let dictionary = new HT(1024);
  for( let i = 0; i < words.length; i++){
    if( dictionary.find(words[i]) ) {
      return words[i];
    } else {
      dictionary.Set(words[i],1);
    }
  }
  return null;
};

module.exports = {repeats};





