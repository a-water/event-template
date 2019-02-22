import React, { Component } from 'react';
import Nav from './Nav';
import Card from './Cards/Card';
import CardButton from './Cards/CardButton';
import CardList from './Cards/CardList';
import EventForm from './EventForm';
import axios from 'axios';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formHidden: true,
      newEventName: '',
      retrieveEventsResponse: ''
    }

    this.renderCreateNewEvent = this.renderCreateNewEvent.bind(this);
    this.fetchAndRenderExistingEvents = this.fetchAndRenderExistingEvents.bind(this);
  }

  componentWillMount() {
    this.fetchAndRenderExistingEvents();
  }

  renderCreateNewEvent() {
    this.setState({ formHidden: !this.state.formHidden})
  }

  fetchAndRenderExistingEvents() {
    axios.get('/api/retrieveEvents')
      .then(events => {
        this.setState({"retrieveEventsResponse": events})
      })
      .catch(err => {
        this.setState({"retrieveEventsResponse": err})
      });
  }

  render() {
    return(
      <div>
          <Nav />
          <div className="card-parent">
              <Card title="Create">
                <CardButton buttonTitle="New event" onClick={ this.renderCreateNewEvent } visibleClass= { this.state.formHidden ? "" : "element-hidden"}/>
                <EventForm hidden={ this.state.formHidden } onSuccess= { this.fetchAndRenderExistingEvents }/>
              </Card>
              <Card title="Manage">
                <CardList listData={ this.state.retrieveEventsResponse } isLanding= { true }/>
              </Card>
          </div>
      </div>
    );
  }
}

export default Landing;