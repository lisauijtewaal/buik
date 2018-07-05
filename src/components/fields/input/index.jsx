
import React, { Component } from 'react';
import { DiaryContext } from "../../../context/diary-context";
import './index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0
    };
  }
  handleChange(value, setScore){
    // zet de nieuwe waardes wanneer de gebruiker het inputveld verandert.
    this.setState({
      value: value,
    });

    const newScore = this.props.calculateScore(value);

    setScore(this.props.type, newScore);
  }
  render(){
    return (
      <DiaryContext.Consumer>
        {(diaryState) => (
          <div className="field">{console.log(diaryState.results)}
            <input type="number" value={this.state.value}
                   onChange={(e) => this.handleChange(e.target.value, diaryState.setScore)} />
            <h3>{this.state.value} {this.props.label}</h3>
          </div>
        )}
      </DiaryContext.Consumer>
    )
  }
}

App.defaultProps = {
  label: "minuten",
};

export default App;