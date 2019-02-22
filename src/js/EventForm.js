import React, { Component } from 'react';
import axios from 'axios';

class EventForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      newEventName: '',
      formHidden: true
    }
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  handleInputChange = event => {
    this.setState({ newEventName: event.target.value });
  }
  
  handleFormSubmit = async event => {
    event.preventDefault();
    this.setState({ newEventName: '' });
    
    let formData = this.state.newEventName;
    axios.post('/api/createEvent', { eventName: formData })
    .then(retrieveEventsResponse => {
      // success
      this.props.onSuccess();
      this.setState({ formHidden: true })
    }).catch(error => {
      // fail
      console.log('ERROR occured');
    });
  }
  
  render() {
    return (
      <form onSubmit={ this.handleFormSubmit } className={ this.props.hidden ? "new-event-form element-hidden" : "new-event-form" }>
        <label>Name</label>
        <input type="text" value={ this.state.newEventName } onChange={ this.handleInputChange }/>
        <br />
        
        <label>Contacts CSV</label>
        <input type="file"/>
        <br />
        
        <input type="submit" />
      </form>
      );
    }
  }
  
  export default EventForm;