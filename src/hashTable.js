'use strict'

// const ht = new HashTable()
// ht.put("name", "Zanzibar")  // adds a key-value pair to the hash table, deal with collisions using chaining
// ht.get("name")              // returns the data associated with key.
// ht.contains("name")         // returns true if the hash table contains the key.
// ht.iterate((k, v) => console.log(`${k}: ${v}`)) // takes a callback function and passes it each key and value in sequence.
// ht.remove("name")           // removes a key-value pair by key.
// ht.size()                   // returns the number of key-value pairs in the hash table.
// HashTable.hash("name")

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
    return total % this.table.length;
  }

  put(data) {
    var position = this.hasher(data);
    this.table[position] = data;
  }



  size() {
    return this.table.length
  }
}
