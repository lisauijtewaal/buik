import React, { Component } from 'react';
import {Switch, Route, Link } from 'react-router-dom';
import Coach from '../../../components/diary/coach';
import stepsData from '../../../data/steps';
import TopResults from './TopResults';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="movement step">
        <Switch>
          <Route path='/dagboek/resultaten' exact component={() => <Coach {...stepsData.results.coach} />} />
          <Route path='/dagboek/resultaten/top-3' exact component={TopResults} />
        </Switch>

      </div>
    );
  }
}

export default App;
