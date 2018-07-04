
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

  // zet de nieuwe waarde wanneer de gebruiker op de plus of min klikt.
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
            {/* wanneer de gebruiker op de - klik verminder de huidige status met 1 */}
            <button className="b_count" onClick={() => this.setItem(-1, diaryState.setScore)}>-</button>
            {/*huidige status */}
            <h2>{ this.state.clicks }</h2>
            {/*wanneer de gebruiker op de + klik verhoog de huidige status met 1 */}
            <button className="b_count"  onClick={() => this.setItem(1, diaryState.setScore)}>+</button>
          </div>
        )}
      </DiaryContext.Consumer>
    );
  }
}

export default App;

