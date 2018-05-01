import React, { Component } from 'react';
import {Switch, Route, Link } from 'react-router-dom';
import Step from '../../../../components/diary/step';
import stepsData from '../../../../data/steps';

class App extends Component {
  render() {
    return (
      <div className="step">
        <Step diaryCategory={stepsData.movement} currentStep={Number(this.props.match.params.step)}  />
      </div>
    );
  }
}

export default App;
