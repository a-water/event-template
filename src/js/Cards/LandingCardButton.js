import React, { Component } from 'react';

class LandingCardButton extends Component {
  render() {
    return(
      <div className={`landing-card-button ${ this.props.visibleClass }`} onClick={ this.props.onClick }>
        { this.props.buttonTitle }
      </div>
    )
  }
}

export default LandingCardButton;