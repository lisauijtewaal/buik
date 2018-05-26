import React, { Component } from 'react';
import {Switch, Route, Link } from 'react-router-dom';
import Info from '../../../components/info';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="info">
        <h2>langdurige stress</h2>
        <Switch>
          <Route path='/voeding/koolzuur' component={Info} />
        </Switch>
      </div>
    );
  }
}

export default App;
