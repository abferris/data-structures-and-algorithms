'use strict';

let HT = require('../hashtable.js').HashTable;

const intersection = (treeA,treeB) => {
  const ht = new HT();
  const output = [];
  storeValues(treeA.root,ht);
  findRepeats(treeB,ht, output);
  return output;
  
};

const storeValues = (tree,table) => {
  let current =tree.root;
  table.add(current.value, current.value);
  if(current.leftChild){
    storeValues(current.leftChild,table);
  }
  if(current.rightChild){
    storeValues(current.rightChild,table);
  }
};

const findRepeats = (tree, table, output) => {
  let current = tree.root;
  if(table.find(current.value)){
    output.push(current.value);
  }
  if(current.leftChild){
    findRepeats(current.leftChild,table);
  }
  if(current.rightChild){
    findRepeats(current.rightChild,table);
  }
};


module.exports = {intersection, storeValues,findRepeats};





