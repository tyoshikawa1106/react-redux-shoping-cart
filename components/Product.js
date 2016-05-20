import React, { Component, PropTypes } from 'react'

export default class Product extends Component {
  render() {
    const { price, quantity, title } = this.props
    return <td>{title} - &#36;{price} {quantity ? `x ${quantity}` : null}</td>
  }
}

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}
