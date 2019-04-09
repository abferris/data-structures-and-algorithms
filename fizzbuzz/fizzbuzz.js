'use strict';


const fizzbuzz = function (tree, root=tree.root) {
  if(!root){
    return tree;
  }
  if(root.data%3 === 0 && root.data%5===0){
    root.data='fizzbuzz';
    console.log('fizzbuzz');
  } else
  if(root.data%3===0){
    root.data='fizz';
    console.log('fizz');
  } else
  if(root.data%5===0){
    root.data='buzz';
    console.log('buzz');
  }

  if(root.leftChild){
    fizzbuzz(tree, root.leftChild);
  }
  if(root.rightChild){
    fizzbuzz(tree, root.rightChild);
  }

  return tree;
};

module.exports = {fizzbuzz};