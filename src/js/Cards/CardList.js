import React, { Component } from 'react';
import CardListItem from './CartListItem';
import CardPeopleListItem from './CardPeopleListItem';

class CardList extends Component {
  renderListItems(isPeopleList, listData) {
    if(!isPeopleList) {
      return(
        listData.data.map(event => {
          return <CardListItem
            title= { event.title }
            buttonText= "Manage"
            key={ event.title }
            eventId={ event._id }
          />
        })
      );
    } else {
      return(
        listData.data.attendees.map(attendee => {
          return <CardPeopleListItem
              name= { attendee }
              buttonText= "Delete"
              key= { attendee }
            />

        })
      );
    }

    
  }

  render() {    
    return(
      <div className="manage-event-list">
        <ul>
          { this.props.listData ? this.renderListItems(this.props.isPeopleList, this.props.listData) : <h1>Loading...</h1> }
        </ul>
      
      </div>
    )
  }
}

export default CardList;