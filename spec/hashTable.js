import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hashTable'

chai.use(chaiChange)

describe('HashTable', () => {
  'use strict'

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  context('hasher()', () => {
    it('generates a hash for the key "name".', () => {
      const myHashTable = new HashTable()
      expect(myHashTable.hasher('name')).to.equal( 6 )
    })
  })

  context('put()', () => {
    it('addes an element to the hash table.', () => {

      const myHashTable = new HashTable()
      myHashTable.put('name')
      myHashTable.put("Zanzibar")
      expect(myHashTable.size()).to.equal( 137 )
    })
  })

  context('size()', () => {
    it('returns the number of key-value pairs in the hash table.', () => {

      const myHashTable = new HashTable()
      myHashTable.put('foo')
      myHashTable.put('too')
      expect(myHashTable.size()).to.equal( 137 )
    })
  })

  context('get()', () => {
    it('returns the data associated with key.', () => {

      const myHashTable = new HashTable()
      myHashTable.put('foo')
      myHashTable.put('too')
      myHashTable.get('foo')
      expect(myHashTable.size()).to.equal( 137 )
    })
    it('returns the -1 if value not found.', () => {

      const myHashTable = new HashTable()
      myHashTable.put('foo')
      myHashTable.put('too')
      expect(myHashTable.get('name')).to.equal( -1  )
    })
  })
})
