import React, { Component } from 'react';
import CardListItem from './CartListItem';
import CardPeopleListItem from './CardPeopleListItem';
import axios from 'axios';

class CardList extends Component {

  constructor(props) {
    super(props);

    this.handleDeleteAttendee = this.handleDeleteAttendee.bind(this);
  }

  handleDeleteAttendee(attendeeToRemove) {
    let attendees = this.props.listData.data.attendees;
    attendees = attendees.filter(attendee => attendee !== attendeeToRemove);
    console.log('attendees', attendees, "id:", this.props.id);
    

    axios.post('/api/updateEvent', { id: this.props.id, attendees: attendees})
      .then(event => {
        console.log('new event:', event);
      })
      .catch(err => {
        console.log('error updating event', err);
      });
    
  }

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
              onClick= { () => this.handleDeleteAttendee(attendee) }
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