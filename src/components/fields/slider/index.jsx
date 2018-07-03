import './index.css';
import React, { Component } from 'react';
import RangeSlider from 'react-rangeslider';
import './slider.css'
import {DiaryContext} from "../../../context/diary-context";


class Slider extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      score: 1,
    };
  }

  handleOnChange = (newScore, setScore) => {
    // zet nieuwe score wanneer de huidige is veranderd.
    this.setState({
      score: newScore
    });
    setScore(this.props.type, newScore);
  };

  render() {
    const score = this.state.score;
    return (
      <DiaryContext.Consumer>
        {(diaryState)=> (
          <div className="field">
            <RangeSlider
              min={1}
              max={10}
              value={score}
              orientation="horizontal"
              onChange={(newScore) => this.handleOnChange(newScore, diaryState.setScore)}
            />
          </div>
        )}

      </DiaryContext.Consumer>
    )
  }
}

export default Slider;