import React, { Component } from 'react';

class CardListItemButton extends Component {
  render() {
    return(
      <div className="manage-event-list-item-button button" onClick={ this.props.onClick }>
        { this.props.buttonText }
      </div>
    )
  }
}

export default CardListItemButton;