import React, { Component } from 'react';
import Nav from './Nav';
import Card from './Cards/Card';
import CardList from './Cards/CardList';

class Manage extends Component {
  render() {
    return(
      <div>
        <Nav />
        <div className="card-parent">
          <Card title={ this.props.title ? "delete me" : "Temp Event Title" }>
            <CardList />
          </Card>
        </div>
      </div>
    )
  }
}

export default Manage;