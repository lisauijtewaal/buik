import './index.css';
import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      volume: 0
    }
  }

  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
  };

  render() {
    let { volume } = this.state;
    return (
      <div className="field">
      <Slider
        value={volume}
        orientation="horizontal"
        onChange={this.handleOnChange}
      />
      </div>
    )
  }
}

export default App;