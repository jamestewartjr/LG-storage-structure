'use strict'

// ht.get("name")              // returns the data associated with key.
// ht.contains("name")         // returns true if the hash table contains the key.
// ht.iterate((k, v) => console.log(`${k}: ${v}`)) // takes a callback function and passes it each key and value in sequence.
// ht.remove("name")           // removes a key-value pair by key.

export default class HashTable {
  constructor(){
    this.table = new Array(137)
  }

  hasher(data) {
    let total = 0
    if (data.length === 0) {return total}
    for (let index = 0; index < data.length; ++index ) {
      total += data.charCodeAt(index)
    }
    return total % this.table.length
  }

  put(data) {
    let position = this.hasher(data)
    this.table[position] = this.hasher(data) + ": " + data
  }

  size() {
    return this.table.length
  }

  get(data){
    if(!this.table[this.hasher(data)]) {
      return -1
    }
    return this.table[this.hasher(data)]
  }
}
