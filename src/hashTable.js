'use strict'

// ht.get("name")              // returns the data associated with key.
// ht.contains("name")         // returns true if the hash table contains the key.
// ht.iterate((k, v) => console.log(`${k}: ${v}`)) // takes a callback function and passes it each key and value in sequence.
// ht.remove("name")           // removes a key-value pair by key.
// HashTable.hash("name")

export default class HashTable {
  constructor(){
    this.table = new Array(1)

  }

  hasher(data) {
    let total = 0
    if (data.length === 0) {return total}
    for (let index = 0; index < data.length; ++index ) {
      total += data.charCodeAt(index)
    }
    return total % this.table.length;
  }

  put(data) {
    var position = this.hasher(data);
    this.table[position] = {data:data, };
  }


  size() {
    return this.table.length
  }
}
