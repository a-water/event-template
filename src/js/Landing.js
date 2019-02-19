import React, { Component } from 'react';
import Nav from './Nav';
import LandingCard from './Cards/LandingCard';
import LandingCardButton from './Cards/LandingCardButton';
import LandingCardList from './Cards/LandingCardList';

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
          <div className="landing-card-parent">
              <LandingCard title="Create">
                <LandingCardButton buttonTitle="New event" onClick={ this.renderCreateNewEvent } visibleClass= { this.state.formHidden ? "" : "element-hidden"}/>
                <form className={ this.state.formHidden ? "new-event-form element-hidden" : "new-event-form" }>
                  <label>Name</label>
                  <input type="text"/>
                  <br />
                  
                  <label>Contacts CSV</label>
                  <input type="file"/>
                  <br />

                </form>
              </LandingCard>
              <LandingCard title="Manage">
                <LandingCardList />
              </LandingCard>
          </div>
      </div>
    );
  }
}

export default Landing;