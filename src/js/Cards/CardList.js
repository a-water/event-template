import React, { Component } from 'react';
import CardListItem from './CartListItem';

class CardList extends Component {
  renderListItems(listData) {
    return(
      this.props.listData.data.map(event => {
        return <CardListItem title={ event.title } buttonText="Manage" key={ event.title } />
      })
    );
  }

  render() {
    return(
      <div className="manage-event-list">
        <ul>
          { this.props.listData ? this.renderListItems(this.props.listData) : <h1>Loading...</h1> }
        </ul>
      
      </div>
    )
  }
}

export default CardList;