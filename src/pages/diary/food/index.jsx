import React, { Component } from 'react';
import {Switch, Route, Link } from 'react-router-dom';
import Step from './step';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="food">
        <Switch>
          <Route path='/dagboek/voeding/:step?' component={Step} />
        </Switch>
      </div>
    );
  }
}

export default App;
