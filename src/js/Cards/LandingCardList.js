import React, { Component } from 'react';
import LandingCardListItem from './LandingCartListItem';

class LandingCardList extends Component {
  render() {
    return(
      <div className="manage-event-list">
        <ul>
          <LandingCardListItem title="One" buttonText="Manage" onClick="" />
          <LandingCardListItem title="Two" buttonText="Manage" onClick="" />
          <LandingCardListItem title="Three" buttonText="Manage" onClick="" />
        </ul>
      
      </div>
    )
  }
}

export default LandingCardList;