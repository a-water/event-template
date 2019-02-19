import React, { Component } from 'react';
import Nav from './Nav';
import Card from './Cards/Card';
import CardButton from './Cards/CardButton';
import CardList from './Cards/CardList';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formHidden: true
    }

    this.renderCreateNewEvent = this.renderCreateNewEvent.bind(this);
  }

  renderCreateNewEvent() {
    this.setState({ formHidden: !this.state.formHidden})
  }

  render() {
    return(
      <div>
          <Nav />
          <div className="card-parent">
              <Card title="Create">
                <CardButton buttonTitle="New event" onClick={ this.renderCreateNewEvent } visibleClass= { this.state.formHidden ? "" : "element-hidden"}/>
                <form className={ this.state.formHidden ? "new-event-form element-hidden" : "new-event-form" }>
                  <label>Name</label>
                  <input type="text"/>
                  <br />
                  
                  <label>Contacts CSV</label>
                  <input type="file"/>
                  <br />

                </form>
              </Card>
              <Card title="Manage">
                <CardList />
              </Card>
          </div>
      </div>
    );
  }
}

export default Landing;