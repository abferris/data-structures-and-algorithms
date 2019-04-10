'use strict';



class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack{
  constructor(initialVal){
    if (initialVal){
      this.top = new Node(initialVal);
    } else{
      this.top = null;
    }
  }
  

  //takes value in, adds new node with value to the top
  push(value){
    if(!this.top){
      this.top = new Node(value);
    } else {
      let newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  //takes no agrument and removes new node to the top of the stack
  pop(){
    if(!this.top){
      return null;
    }
    let toRemove = this.top;
    this.top = toRemove.next;
    toRemove.next = null;
    return toRemove.data;
  }

  //takes no argument and returns top node
  peek(){
    return this.top.data;
  }
  
}
const bracketValidator = function(string) {
  if ( typeof(string) ==! 'string'){
    return false;
  }
  let arr = string.split('');
  let stack = new Stack;
  if(!arr.length){ return true; }
  for(let i = 0; i < arr.length; i++){
    if(arr[i]==='{' || arr[i]==='[' || arr[i]==='('){
      stack.push(arr[i]);
    }
    if(arr[i]==='}' || arr[i]===']' || arr[i]===')'){
      if (!stack.top){
        return false;
      }
      if((arr[i]==='}' && stack.top.data==='{') || (arr[i]===']' && stack.top.data==='[') || (arr[i]===')' && stack.top.data==='(')){
        stack.pop();
      }
      else {
        return false;
      }
    }
  }
  if(stack.top) {return false;}
  else{ return true;}
};

module.exports = {Node, Stack, bracketValidator};