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
    if(!this.table[this.hasher(data)]) {
      return false
    }
    return true
  }

  remove(data){
    let position = this.table[this.hasher(data)]
    this.table.splice(position, 1)
  }

  // chainer() {
  //   for(let i = 0; i < this.table.length; i++){
  //     this.table[i] = new Array()
  //   }
  // }

  // iterate( data , callback ) {
  //   let results = data.map( (k, v) => (k, v))
  //   console.log(results)
  //   return results
  // }

}
