'use strict';

class Node {
  constructor(value){
    this.val = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(val){
    val ? this.head = null: this.head= new Node(val);
  }

  APPEND(value) {
    const toAdd = new Node(value);
    if(!this.head){
      this.head=toAdd;
      return;
    }
    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = toAdd;
  }

  values() {
    let values =[];
    let current = this.head;
    while(current) {
      values.push(current.val);
      current = current.next;
    }
    return values;
  }

}

class HashTable {
  constructor(size=16){
    this.size=size;
    this.map = new Array(size);
  }

  hash(key){
    return key.split('').reduce( (p,n) => {
      return p + n.charCodeAt(0);
    }, 0)*599%this.size;
  }

  Set(key,val) {
    //hash the key
    let hash=this.hash(key);
    let entry = {[key]: val};
    // if empty case
    if( !this.map[hash]){
      this.map[hash]= new LinkedList(entry);
    }
    this.map[hash].APPEND(entry);
  
  }

  find(key){
    let hkey = this.hash(key);
    if(this.map[hkey]){
      let current = this.map[hkey].head;
      while(current){
        if (current.val[key]){
          return current.val[key];
        }
        current= current.next;
      }
    }
    return null;
  }
  
}

module.exports = { HashTable };



// let ht = new HashTable();

// ht.Set('Aaron', 'Me');
// ht.Set('Gabbie', 'Boss');
// ht.Set('John', 'Bald');
// ht.Set('Jon', 'not as bald');
// ht.Set('Billy','Bunn Master');
// ht.Set('Vanessa', 'Ping-Guru');
// console.log(ht.map[0])
// ht.map.forEach((data,i) => {
//   console.log(i,data&&data.values());
// });
