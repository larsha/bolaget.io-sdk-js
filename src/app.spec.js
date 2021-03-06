import { expect } from 'chai'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { products, stores, product, store } from './app'

chai.use(chaiAsPromised)
chai.should()

describe('Products', function () {
  describe('#products()', function () {
    it('should return an array of products', function () {
      return products().should.be.fulfilled
        .then(products => {
          expect(products instanceof Array).to.be.true
        })
    })
  })

  describe('#product()', function () {
    it('should return a product', function () {
      const nr = "8617101"
      return product(nr).should.be.fulfilled
        .then(product => {
          expect(product instanceof Object).to.be.true
        })
    })
  })
})

describe('Stores', function () {
  describe('#stores()', function () {
    it('should return an array of stores', function () {
      return stores().should.be.fulfilled
        .then(stores => {
          expect(stores instanceof Array).to.be.true
        })
    })
  })

  describe('#store()', function () {
    it('should return a store', function () {
      const nr = "0146"
      return store(nr).should.be.fulfilled
        .then(store => {
          expect(store instanceof Object).to.be.true
        })
    })
  })
})
