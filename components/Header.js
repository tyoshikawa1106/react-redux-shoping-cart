import React from 'react'

const Header = () => (
  <div className="slds-page-header" role="banner">
    <div className="slds-grid">
      <div className="slds-col slds-has-flexi-truncate">
        <p className="slds-text-heading--label">React × Redux</p>
        <div className="slds-grid">
          <div className="slds-grid slds-type-focus slds-no-space">
            <h1 className="slds-page-header__title slds-truncate" title="Lightning Design System Apps">SHOPING CART APPS</h1>
          </div>
        </div>
      </div>
    </div>
    <p className="slds-text-body--small slds-page-header__info"></p>
  </div>
)

export default Header