
import React, { Component } from 'react';
import { DiaryContext } from "../../../context/diary-context";
import './index.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }

  setItem = (value, setScore) => {
    const clicks = this.state.clicks + value;

    this.setState({clicks: clicks});

    const newValue = this.props.calculateScore(clicks);

    setScore(this.props.type, newValue);
  };


  render() {
    return (
      <DiaryContext.Consumer>
        {(diaryState) => (
          <div className="field">{console.log(diaryState.results)}
            <button onClick={() => this.setItem(-1, diaryState.setScore)}>-</button>
            <h2>{ this.state.clicks }</h2>
            <button onClick={() => this.setItem(1, diaryState.setScore)}>+</button>
          </div>
        )}
      </DiaryContext.Consumer>
    );
  }
}

export default App;

