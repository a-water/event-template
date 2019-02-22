import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="mainNav">
        <Link to="/">
          <p>Event Manager</p>
        </Link>
      </div>
    );
  }
}

export default Nav;