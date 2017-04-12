import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hashTable'

chai.use(chaiChange)

describe('HashTable', () => {
  'use strict'

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  context('put()', () => {
    it('adds an element to the hash table.', () => {
      const myHashTable = new HashTable()
      expect(myHashTable.size()).to.equal( 1 )
    })
  })
})
