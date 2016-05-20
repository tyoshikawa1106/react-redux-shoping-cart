/**
 * Mocking client-server processing
 */
import _products from './products.json'

const TIMEOUT = 100
// HEROKUで動かす用
const PRODUCTS = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
]

export default {
  getProducts(cb, timeout) {
    //setTimeout(() => cb(_products), timeout || TIMEOUT) <- Herokuでは動かない
    setTimeout(() => cb(PRODUCTS), timeout || TIMEOUT)
  },

  buyProducts(payload, cb, timeout) {
    setTimeout(() => cb(), timeout || TIMEOUT)
  }
}
