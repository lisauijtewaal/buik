import React, { Component } from 'react';
import {Switch, Route, Link } from 'react-router-dom';
import Step from './step';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="stress">
        <Switch>
          <Route path='/dagboek/ontspanning/:step?' component={Step} />
        </Switch>
      </div>
    );
  }
}

export default App;
