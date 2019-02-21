import React, { Component } from 'react';
import CardListItemButton from './CardListItemButton';

class CardListItem extends Component {
  render() {
    return(
      <li className="manage-event-list-item">
        { this.props.name }
        <CardListItemButton buttonText={ this.props.buttonText } />
      </li>
    )
  }
}

export default CardListItem;