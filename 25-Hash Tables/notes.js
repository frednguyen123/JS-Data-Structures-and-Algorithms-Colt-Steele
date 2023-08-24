/**
 * Hash Tables / Hash Map
 */

/**
 * OBJECTIVES
 * Explain what a hash table is
 * Define what a hashing algorithm is
 * Discussing what makes a good hashing algorithm
 * Understand how colliisons occur in a hash table
 * Handling collisions using a separate chaining and linear probing
 * 
 * WHAT IS A HASH TABLE?
 * Hash tables are used to store key-value pairs.
 * They are like arrays, but the keys are not ordered.
 * Unlike arrays, hash tables are fast for all of the following operations:
 * finding values, adding new values, and removing values.
 * 
 * WHY SHOULD I CARE?
 * Nearly every programming language has some sort of hash table data structure
 * Because of their speed, hash tables are very commonly used.
 * 
 * HASH TABLES EXAMPLE
 * Imagine we want to store some colors, we could use an array/list.
 * It would be nice if instead of using indices to access the colors, we could
 * use more human-readable keys. e.g colors[cyan] better than colors[2].
 * 
 * THE HASH PART
 * To implement a hash table, we'll be using an array.
 * In order to look up values by key, we need a way to convert keys into
 * valid array indices.
 * A function that performs this task is called a hash function.
 * 
 */

/**
 * HASH FUNCTIONS INTRODUCTION
 * 
 * WHAT MAKES A GOOD HASH?
 * 1. Fast (i.e constant time)
 * 2. Doesn't cluster outputs at specific indices, but distributes uniformly
 * 3. Deterministic (same input yields same output)
 * 
 */

/**
 * WRITING OUR FIRST HASH (for strings only)
 * We can write a key, and pass into the array size that we want to store it.
 * Using character codes we can have a specific number for each charcter and
 * use modulus our total at the end to fit our array.
 * 
 * REDEFINING OUR HASH
 * 1. Only hashes strings 
 * 2. Not constant time - linear in key length
 * 3. Could be a little more random
 * 
 * IMPROVING OUR HASH FUNCTION
 * The prime number in the hash in helpful in spreading out the keys more uniformly.
 * It's also helpful if the array that you're putting values into has a prime length.
 * 
 * DEALING WITH COLLISIONS
 * Even with a large array and a great heash function, collisions are inevitable.
 * There are many strategies for dealing with collisions, but we'll focus on two:
 * 1. Separate Chaining
 * 2. Linear Probing
 * 
 * SEPARATE CHAINING
 * With separate chaining, at each index in our array we store values using a more
 * sophisticated data structure (arr or linked list)
 * This allows us to store multiple key-value pairs at the same index.
 * 
 * LINEAR PROBING
 * With linear probing, when we find a collision, we search through the array to
 * find the next empty slot.
 * Unlike with separate chaining, this allows us to store a single key-value at 
 * each index.
 */

function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
      // map "a" to 1, "b" to 2, "c" to 3, etc.
      let value = char.charCodeAt(0) - 96
      total = (total + value) % arrayLen;
    }
    return total;
}

function hash2(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
  }

/**
 * HASHTABLE SET/GET 
 * SET:
 * 1. Accepts a key and a value
 * 2. Hashes the key
 * 3. Stores the key-value pairing in the hash table array via separate chaining
 * GET:
 * 1. Accepts a key
 * 2. Hashes the key
 * 3. Retrieves the key-value pair in the hash table
 * 4. If they key isn't found, return undefined.
 */

/**
 * HASHTABLE KEYS/VALUES
 * KEYS:
 * 1. Loop through the hash table array and returns an array of keys in the table.
 * VALUES:
 * 1. Loops through the hash table array, and returns an array of values in the table.
 */

  class HashTable {
    constructor(size=53){
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
          let char = key[i];
          let value = char.charCodeAt(0) - 96
          total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;1
    }
    set(key, value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key,value]);
        return index;
    }
    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
          for(let i = 0; i < this.keyMap[index].length; i++){
            if(this.keyMap[index] [i] [0] === key) {
              return this.keyMap[index] [i] [1];
            }
          }
        }
        return undefined;
      }
      values(){
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
      }
      keys(){
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
      }
  }

//   let ht = new HashTable();
//   ht.set("hello world", "goodbye!!")
//   ht.set("dogs", "are cool")
//   ht.set("cats", "are fine")
//   ht.set("i love", "pizza")
  
let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet","#DDA0DD")

/**
 * BIG O HASHTABLES
 * Insertion - O(1)
 * Removal - O(1)
 * Searching - O(1)
 * 
 * WORST CASE: O(N) if everything is distributed in one hash index
 *  
 * RECAP
 * Hash tables are collections of key-value pairs.
 * Hash tables can find values quickly given a key.
 * Hash tables can add a new key-value quickly.
 * Hash tables store data in a large array, and work by hashing the keys.
 * A good hash should be fast, distribute keys uniformly and be deterministic.
 * Separate chaining and linear probing are two strategies used to deal with 
 * two keys that hash to the same index.
 */