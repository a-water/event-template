import React, { Component } from 'react';
import CardListItem from './CartListItem';

class CardList extends Component {
  render() {
    return(
      <div className="manage-event-list">
        <ul>
          <CardListItem title="One" buttonText="Manage" onClick="" />
          <CardListItem title="Two" buttonText="Manage" onClick="" />
          <CardListItem title="Three" buttonText="Manage" onClick="" />
        </ul>
      
      </div>
    )
  }
}

export default CardList;