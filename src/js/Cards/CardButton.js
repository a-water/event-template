import React, { Component } from 'react';

class CardButton extends Component {
  render() {
    return(
      <div className={`card-button button ${ this.props.visibleClass }`} onClick={ this.props.onClick }>
        { this.props.buttonTitle }
      </div>
    )
  }
}

export default CardButton;