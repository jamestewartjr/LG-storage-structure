'use strict'

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

  // chainer() {
  //   for(let i = 0; i < this.table.length; i++){
  //     this.table[i] = new Array()
  //   }
  // }

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

  contains(data){
    
  }
}
