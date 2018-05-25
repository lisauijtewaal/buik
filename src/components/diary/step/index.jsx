import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Coach from '../coach';
import './index.css';

class App extends Component {
  render() {


    const currentStep = this.props.diaryCategory.steps[this.props.currentStep];
    console.log(this.props.currentStep);
    if (!currentStep){
      return <Coach {...this.props.diaryCategory.coach} />;

    }


    return <div className="step">
      <div className="currentStep">
        <h3>1</h3>
        <p>/2</p>
      </div>
      <div className="box">
        {/*<img className="image" src={currentStep.image}/>*/}
        <div className="info">
          <h2>{this.props.diaryCategory.category}</h2>
          <h1>{currentStep.text}</h1>
          <p>{currentStep.textfield}</p>
        </div>
        <div className="question">
          <p>{currentStep.question}</p>
          {currentStep.field}
        </div>
        <Link to={currentStep.nextUrl}>
          <button className="button" type="button">
            Volgende ❯
          </button>
        </Link>
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
