import React, { Component } from 'react';
import Home from "../home";
import {Switch, Route, Link } from 'react-router-dom';
import Start from './start';
import Stress from './stress';

class App extends Component {
  render() {
    return (
      <div className="diary">
        <Switch>
          <Route path='/dagboek' exact component={Start} />
          <Route path='/dagboek/ontspanning' component={Stress} />
          <Route path='/dagboek/voeding' component={Home} />
          <Route path='/dagboek/beweging' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;