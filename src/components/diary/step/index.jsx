import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Coach from '../coach';
import './index.css';
import Popup from '../../popup'

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }



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
        <img className="image" src={currentStep.image}/>
        <div className="info">

          <div className="headlines">
          <h2><span>{this.props.diaryCategory.category}</span></h2>
            <h1><span>{currentStep.text}</span></h1>
          </div>
          <p>{currentStep.textfield}</p>

        </div>

        <div className="question">
          <img className="popImage" src={require('../../../images/info.png')} onClick={this.togglePopup.bind(this)}/>
          {this.state.showPopup ?
            <Popup
              text={currentStep.popup}
              image={currentStep.popImage}
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
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
      popup: PropTypes.node,
      nextUrl: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  currentStep: PropTypes.string,
};

export default App;
