
import './index.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    };
  }
  handleChange(e){
    this.setState({
      message: e.target.value
    });
  }
  render(){
    return (
      <div className="field">
        <input type="number" placeholder="0" value={this.state.message}
               onChange={this.handleChange.bind(this)} />
        <p><h3>{this.state.message} minuten</h3></p>
      </div>
    )
  }
}

export default App;