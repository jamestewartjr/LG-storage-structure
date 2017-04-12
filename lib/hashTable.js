// 'use strict';
//
// // const ht = new HashTable()
// // ht.put("name", "Zanzibar")  // adds a key-value pair to the hash table, deal with collisions using chaining
// // ht.get("name")              // returns the data associated with key.
// // ht.contains("name")         // returns true if the hash table contains the key.
// // ht.iterate((k, v) => console.log(`${k}: ${v}`)) // takes a callback function and passes it each key and value in sequence.
// // ht.remove("name")           // removes a key-value pair by key.
// // ht.size()                   // returns the number of key-value pairs in the hash table.
// // HashTable.hash("name")
//
// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
//
// function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
//
// var hashTable = function hashTable() {
//   _classCallCheck(this, hashTable);
//
//   this.table = new Array();
//   this.hasher = hasher;
//   this.put = put;
//   this.get = get;
//   this.contains = contains;
//   this.iterate = iterate;
//   this.remove = remove;
//   this.size = size;
// }
// //
// // hasher = (data) => {
//   let total = 0
//   if (data.length === 0) return total
//   for (let index = 0; index < data.length; ++index ) {
//     total += data.charCode(index)
//   }
//   return total % this.table.length
// }

// put = (data) => {
//   let position
// }
;

exports.default = hashTable;
