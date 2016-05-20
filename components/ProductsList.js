import React, { Component, PropTypes } from 'react'

export default class ProductsList extends Component {
  render() {
    return (
      <div>
        <h3 className="slds-text-heading--medium slds-m-bottom--small">{this.props.title}</h3>
        <div>
          <table className="slds-table slds-table--bordered">
            <tbody>
              {this.props.children}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}
