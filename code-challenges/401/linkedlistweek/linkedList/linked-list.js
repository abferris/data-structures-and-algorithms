'use strict';

class Node {
  constructor(value){
    this.val=value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head=null;
  }

  /**
   * @param  {} input
   * @param  {} {if(!input
   * @param  {} returnnull;letnewNode=newNode(input
   */
  insert(input){

    if(!input) return null;

    let newNode = new Node(input);
    newNode.next = this.head;
    this.head = newNode;
    
  }

  
  /**
   * @param  {} input
   * @param  {} {letcurrent=this.head;while(current.next
   * @param  {} {current=current.next;}letnewNode=newNode(input
   */
  append(input){
    let current = this.head;
    while(current){
      current = current.next;
    }
    let newNode = new Node(input);
    current= newNode;
  }

  insertBefore(input,newVal){
    let current = this.head;
    if(current.val===input){
      const newNode = new Node(newVal);
      newNode.next = current;
      this.head= newNode;
    }
    while(current.next){
      if (current.next.val==input){
        const newNode = new Node(newVal);
        newNode.next = current.next;
        current.next = newNode;
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  insertAfter(input,newVal){
    let current = this.head;
    while(current){
      if (current.val===input){
        const newNode = new Node(newVal);

        newNode.next = current.next;
        current.next = newNode;
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }  

  /**
   * @param  {} input
   * @param  {} {letcurrent=this.head;while(current
   * @param  {} {if(current.val===input
   */
  includes(input){
    let current = this.head;
    while(current){
      if(current.val===input) {
        return true;
      }
      else {
        current=current.next;
      }
    }
    return false;

  }

  /**
   * @param  {} {letoutput=[];letcurrent=this.head;while(current
   * @param  {} {output.push(current.val
   */
  print(){
    let output = [];
    let current = this.head;
    while(current) {
      output.push(current.val);
      current = current.next;
    }
    return output;
  }

  kthFromEnd(k){
    if(k<1)
    {return null;}
    if(this.head.next===null && k===1){
      return this.head.val;
    }
    let frontRunner = this.head;
    let counter=1;
    while(counter<=k){
      if(!frontRunner){
        return null;
      }
      frontRunner=frontRunner.next;
      counter++;
      // console.log(counter, k);
    }
    let backRunner = this.head;
    while(frontRunner){
      backRunner = backRunner.next;
      frontRunner = frontRunner.next;
    }
    return backRunner.val;
  }


  
}






module.exports = {LinkedList};
