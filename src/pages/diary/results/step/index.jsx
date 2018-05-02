import React, { Component } from 'react';
import {Switch, Route, Link } from 'react-router-dom';
import Result from '../../../../components/diary/results';
import stepsData from '../../../../data/steps';

class App extends Component {
  render() {
    return (
      <div className="step">
        <Result diaryCategory={stepsData.results} currentStep={Number(this.props.match.params.step)}  />
      </div>
    );
  }
}

export default App;
