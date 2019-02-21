import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardListItemButton extends Component {
  render() {
    return(
      <Link to={ `/manage/${this.props.eventId }`}>
        <div className="manage-event-list-item-button button">
          { this.props.buttonText }
        </div>
      </Link>
    )
  }
}

export default CardListItemButton;