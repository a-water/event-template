import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './js/Landing';
import Manage from './js/Manage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component= { Landing } />
            <Route exact path="/manage" component= { Manage } />
          </Switch>
        </div>      
      </BrowserRouter>
    );
  }
}

export default App;
