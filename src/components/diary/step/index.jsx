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
    let imagePath = currentStep.image;

    return <div className="step">
      <h1>{this.props.diaryCategory.category}</h1>
      <div className="box">
        <div className="currentStep">
            <h3>{this.props.currentStep}</h3>
            <p>/{this.props.diaryCategory.steps.length}</p>
        </div>
        <div className="info">
          <img className="image" src={require('./step_1.jpg')}/>

          <h2>{currentStep.text}</h2>
          <p>{currentStep.textfield}</p>
        </div>
        <div className="question">
          <p>{currentStep.question}</p>
          {currentStep.field}
        </div>
      </div>
      <div className="button">
        <Link to={link}>Volgende</Link>
      </div>
    </div>;

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
