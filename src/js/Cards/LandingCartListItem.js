import React, { Component } from 'react';
import LandingCardListItemButton from './LandingCardListItemButton';

class LandingCardListItem extends Component {
  render() {
    return(
      <li className="manage-event-list-item">
        { this.props.title }
        <LandingCardListItemButton buttonText={ this.props.buttonText } onClick={ this.props.onClick } />
      </li>
    )
  }
}

export default LandingCardListItem;