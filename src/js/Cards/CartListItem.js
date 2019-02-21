import React, { Component } from 'react';
import CardListItemButton from './CardListItemButton';

class CardListItem extends Component {
  render() {
    return(
      <li className="manage-event-list-item">
        { this.props.title }
        <CardListItemButton buttonText={ this.props.buttonText } eventId={ this.props.eventId } />
      </li>
    )
  }
}

export default CardListItem;