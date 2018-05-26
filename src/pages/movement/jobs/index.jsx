import React, { Component } from 'react';
import {Switch, Route, Link } from 'react-router-dom';
import Info from '../../../components/info';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="info">
        <h2>huishoudelijke taken</h2>
        <Switch>
          <Route path='/beweging/huishoudelijke-taken' component={Info} />
        </Switch>
      </div>
    );
  }
}

export default App;
