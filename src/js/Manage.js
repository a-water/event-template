import React, { Component } from 'react';
import Nav from './Nav';
import Card from './Cards/Card';
import CardList from './Cards/CardList';
import axios from 'axios';

class Manage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      eventTitle: '',
      attendees: []
    };
  }

  componentWillMount() {
    const { eventId } = this.props.match.params;
    axios.get(`/api/retrieveEvent?eventId=${ eventId }`)
      .then(event => {
        this.setState({
          eventTitle: event.data.title
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
          <Card title={ this.state.eventTitle ? this.state.eventTitle : "" }>
            <CardList />
          </Card>
        </div>
      </div>
    )
  }
}

export default Manage;