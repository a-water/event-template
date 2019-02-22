import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class CardListItemButton extends Component {
  render() {    
    if(this.props.personName) {
      return (
        <div className="manage-event-list-item-button button" onClick={ this.props.onClick }>
          { this.props.buttonText }
        </div>
      )
    } else {    
      return(
      <Link to={ `/manage/${this.props.eventId }`}>
        <div className="manage-event-list-item-button button">
          { this.props.buttonText }
        </div>
      </Link>
      )
    }
  }
}

export default withRouter(CardListItemButton);
