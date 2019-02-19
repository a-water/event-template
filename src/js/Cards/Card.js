import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card-body">
        <p className="card-title">{ this.props.title }</p>
        <div className="card-body">{ this.props.children }</div>
      </div>
    )
  }
}

export default Card;