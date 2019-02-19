import React, { Component } from 'react';

class LandingCardListItemButton extends Component {
  render() {
    return(
      <div className="manage-event-list-item-button" onClick={ this.props.onClick }>
        { this.props.buttonText }
      </div>
    )
  }
}

export default LandingCardListItemButton;