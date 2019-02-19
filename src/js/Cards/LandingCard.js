import React, { Component } from 'react';

class LandingCard extends Component {
  render() {
    return (
      <div className="landing-card-body">
        <p className="landing-card-title">{ this.props.title }</p>
        <div className="landing-card-body">{ this.props.children }</div>
      </div>
    )
  }
}

export default LandingCard;