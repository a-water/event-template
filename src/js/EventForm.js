import React, { Component } from 'react';
import axios from 'axios';

class EventForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      newEventName: '',
      attendeesFile: null,
      formHidden: true
    }
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  handleInputChange = event => {
    // handle file case
    if(event.target.files) {
      this.setState({ attendeesFile: event.target.files[0] });
    } else {
      this.setState({ newEventName: event.target.value });
    }
  }
  
  handleFormSubmit = async event => {
    event.preventDefault();
    this.setState({ newEventName: '' });
    
    let formData = new FormData();
    formData.append('newEventName', this.state.newEventName);
    formData.append('attendeesFile', this.state.attendeesFile);
    
    axios.post('/api/createEvent', formData)
    .then(retrieveEventsResponse => {
      // success
      this.props.onSuccess();
      this.setState({ 
        attendeesFile: null,
        formHidden: true
      })
    }).catch(error => {
      // fail
      console.log('ERROR occured');
    });
  }
  
  render() {
    return (
      <form onSubmit={ this.handleFormSubmit } className={ this.props.hidden ? "new-event-form element-hidden" : "new-event-form" } encType="multipart/form-data">
        <label>Name</label>
        <input type="text" value={ this.state.newEventName } onChange={ this.handleInputChange } name="newEventName"/>
        <br />
        
        <label>Contacts CSV</label>
        <input type="file" onChange={ this.handleInputChange } name="attendeesFile"/>
        <br />
        
        <input type="submit" />
      </form>
      );
    }
  }
  
  export default EventForm;