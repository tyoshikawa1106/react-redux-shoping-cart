import React, { Component } from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import Header from '../components/Header'

export default class App extends Component {
  render() {
    return (
      <div className="slds">
        <Header />
        <div className="slds-p-around--large">
          <h2 className="slds-text-heading--large slds-m-bottom--medium">Shopping Cart Example</h2>
          <ProductsContainer />
          <div className="slds-m-top--large">
            <CartContainer />
          </div>
        </div>
      </div>
    )
  }
}
