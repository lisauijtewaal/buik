import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Coach from '../coach';
import './index.css';

class App extends Component {
  render() {

    const currentStep = this.props.diaryCategory.steps[this.props.currentStep - 1];
    console.log('current step', this.props.currentStep, currentStep);
    if (!currentStep){
      return <Coach {...this.props.diaryCategory.coach} startUrl={`${this.props.diaryCategory.url}/1`} />;
    }

    // als currenstep gelijk is aan max step ga dan naar colgende object in array
    // this.props.currentStep === this.props.diaryCategory.steps {

    const link = this.props.currentStep === this.props.diaryCategory.steps.length ? this.props.diaryCategory.finishedUrl : `${this.props.diaryCategory.url}/${this.props.currentStep + 1}`;

    return (
      <div className="step">
        Stap {this.props.currentStep}<br/>
        Text: {currentStep.text}<br/>
        image: {currentStep.image}<br/>
        field: {currentStep.field}<br/>
        <Link to={link}>Volgende</Link>
      </div>
    );
  }
}

App.propTypes = {
  diaryCategory: PropTypes.shape({
    url: PropTypes.string.isRequired,
    finishedUrl: PropTypes.string.isRequired,
    coach: PropTypes.shape().isRequired,
    steps: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      field: PropTypes.node,
    })).isRequired,
  }).isRequired,
  currentStep: PropTypes.number,
};

export default App;
