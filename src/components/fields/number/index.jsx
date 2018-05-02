
import './index.css';
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };


  render() {
    return (
      <div className="field">
        <button onClick={this.IncrementItem}>-</button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
        <button onClick={this.DecreaseItem}>+</button>
      </div>
    );
  }
}

export default App;

