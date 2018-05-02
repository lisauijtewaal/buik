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

    return <div className="results">
      <h1>{this.props.diaryCategory.category}</h1>

      <div className="box1">
        <div className="number">
          <h1>1</h1>
        </div>
        <div className="category">
          <h1>Koolzuur</h1>
        </div>
        <div className="link">
          <h1> > </h1>
        </div>
      </div>
      <div className="box2">
        <div className="number">
          <h1>2</h1>
        </div>
        <div className="category">
          <h1>Koolzuur</h1>
        </div>
        <div className="link">
          <h1> > </h1>
        </div>
      </div>
      <div className="box3">
        <div className="number">
          <h1>3</h1>
        </div>
        <div className="category">
          <h1>Koolzuur</h1>
        </div>
        <div className="link">
          <h1> > </h1>
        </div>
      </div>
      <div className="button">
        <Link role="button" to={link}>Finish!</Link>
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
      image: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default App;
