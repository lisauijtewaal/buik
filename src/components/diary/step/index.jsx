import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Coach from '../coach';
import './index.css';

class App extends Component {
  render() {

    const currentStep = this.props.diaryCategory.steps[this.props.currentStep];
    if (!currentStep){
      return <Coach {...this.props.diaryCategory.coach} />;
    }

    let imagePath = currentStep.image;

    return <div className="step">
      <div className="box">
        <div className="currentStep">
            <h3>{this.props.currentStep}</h3>
            <p>/{this.props.diaryCategory.steps.length}</p>
        </div>
        <div className="info">
          <img className="image" src={currentStep.image}/>

          <h2>{currentStep.text}</h2>
          <h1>{this.props.diaryCategory.category}</h1>
          <p>{currentStep.textfield}</p>
        </div>
        <div className="question">
          <p>{currentStep.question}</p>
          {currentStep.field}
        </div>
      </div>
      <div className="button">
        <Link role="button" to={currentStep.nextUrl}>Volgende</Link>
      </div>
    </div>;

  }
}

App.propTypes = {
  diaryCategory: PropTypes.shape({
    url: PropTypes.string.isRequired,
    coach: PropTypes.shape().isRequired,
    steps: PropTypes.objectOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      field: PropTypes.node,
      nextUrl: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  currentStep: PropTypes.string,
};

export default App;
