import React, { Component } from 'react';
import Nav from './Nav';
import Card from './Cards/Card';
import CardList from './Cards/CardList';
import axios from 'axios';

class Manage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stateEvent: ''
    };
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
      </div>
    )
  }
}

export default Manage;