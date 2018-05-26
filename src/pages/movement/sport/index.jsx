import React, { Component } from 'react';
import {Switch, Route, Link } from 'react-router-dom';
import Info from '../../../components/info';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="info">
        <h2>sport</h2>
        <Switch>
          <Route path='/beweging/sport' component={Info} />
        </Switch>
      </div>
    );
  }
}

export default App;
