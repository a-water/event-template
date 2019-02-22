import React, { Component } from 'react';
import Nav from './Nav';
import Card from './Cards/Card';
import CardList from './Cards/CardList';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Manage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stateEvent: ''
    };

    this.deleteEvent = this.deleteEvent.bind(this);
  }

  deleteEvent() {
    const { eventId } = this.props.match.params;
    axios.delete('/api/deleteEvent', { params: {id: eventId} })
      .then(confirmation => {
        console.log('Event deleted', confirmation);
       this.props.history.push('/');
      })
      .catch(err => {
        console.log('Error deleting event', err);
      });
  }

  componentWillMount() {
    const { eventId } = this.props.match.params;
    axios.get(`/api/retrieveEvent?eventId=${ eventId }`)
      .then(event => {        
        this.setState({
          stateEvent: event
        });
      })
      .catch(err => {
        console.log('error fetching event');
        // TODO: Catch failure gracefully here
      });
  }

  render() {    
    return(
      <div>
        <Nav />
        <Link to="/">
          <div className="around-card-manage">
            <div className="around-card-button cancel-manage button">
                Go Back
            </div>
          </div>
        </Link>
        <div className="card-parent">
          <Card title={ this.state.stateEvent ? this.state.stateEvent.data.title: "" }>
            <div className="attendees-title">
              <h1>Attendees:</h1>
            </div>
            <CardList 
              listData={ this.state.stateEvent } 
              isPeopleList={ true } 
              id={ this.state.stateEvent ? this.state.stateEvent.data._id : "" }/>
          </Card>
        </div>
        <div className="around-card-manage">
          <div className="around-card-button delete-manage button" onClick={ this.deleteEvent }>
              Delete Event
          </div>
        </div>
      </div>
    )
  }
}

export default Manage;