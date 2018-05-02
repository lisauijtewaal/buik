import React, { Component } from 'react';
import {Switch, Route, Link } from 'react-router-dom';
import Result from './step';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="movement">
        <Switch>
          <Route path='/dagboek/resultaten/:step?' component={Result} />
        </Switch>
      </div>
    );
  }
}

export default App;
