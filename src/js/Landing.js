import React, { Component } from 'react';
import Nav from './Nav';
import Card from './Cards/Card';
import CardButton from './Cards/CardButton';
import CardList from './Cards/CardList';
import axios from 'axios';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formHidden: true,
      newEventName: '',
      res: ''
    }

    this.renderCreateNewEvent = this.renderCreateNewEvent.bind(this);
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
        this.setState({"res": events})
      })
      .catch(err => {
        this.setState({"res": err})
      });
  }

  handleInputChange = event => {
    this.setState({ newEventName: event.target.value });
  }

  handleFormSubmit = async event => {
    event.preventDefault();
    this.setState({ newEventName: '' });

    let formData = this.state.newEventName;
    axios.post('/api/createEvent', { eventName: formData })
      .then(res => {
        // success
        console.log(res);
      }).catch(error => {
        // fail
        console.log('ERROR occured');
      });
  }

  render() {
    return(
      <div>
          <Nav />
          <div className="card-parent">
              <Card title="Create">
                <CardButton buttonTitle="New event" onClick={ this.renderCreateNewEvent } visibleClass= { this.state.formHidden ? "" : "element-hidden"}/>
                <form onSubmit={ this.handleFormSubmit } className={ this.state.formHidden ? "new-event-form element-hidden" : "new-event-form" }>
                  <label>Name</label>
                  <input type="text" value={ this.state.newEventName } onChange={ this.handleInputChange }/>
                  <br />
                  
                  <label>Contacts CSV</label>
                  <input type="file"/>
                  <br />

                  <input type="submit" />

                </form>
              </Card>
              <Card title="Manage">
                <CardList listData={ this.state.res }/>
              </Card>
          </div>
      </div>
    );
  }
}

export default Landing;