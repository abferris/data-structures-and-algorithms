'use strict';
let HT = require('../hashtable.js').HashTable;

let ht = new HT();
let key = 'Aaron';
let value = 'Me';
let key2 = 'Vanessa';
let value2 = 'Pong Rival';

let canHash = (val) => {
  ;
  if(ht.hash(val)>16){
    return false;
  }   
  return true;
};

describe('Hash Table', () => {
 
  it('Will add a key/value to the hashtable', () => {

    let hKey = ht.hash(key);
    ht.Set(key, value);
    expect(ht.map[hKey].head.val).toEqual({[key]:value});
  });

  it('Will return a value based on a key stored using the find function', () => {
    expect(ht.find(key)).toEqual(value);
  });

  it('Will return a null with a nonexistent key', () => {
    expect(ht.find(key2)).toEqual(null);
  });

  it('Will Handle a collision ', () => {
    let hKey = ht.hash(key2);
    ht.Set(key2,value2);
    expect(ht.map[hKey].head.next.val).toEqual({[key2]:value2});

  });

  it('Will return a value from a bucket which has a collision', () => {
    expect(ht.find(key2)).toEqual(value2);
  });

  it('Will successfully hash a key into an in-range value', () => {
    let tablesize = 16;
    let result = true;
    let values = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    values.forEach((val) => {
      if(ht.hash(val)>tablesize){
        result = false;
      }
    });
    expect(result).toEqual(true);
  });


});
