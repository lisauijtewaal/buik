import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Home</h1>
        <input type='text' />
        <Link to='/dagboek'>Naar dagboek</Link>
      </div>
    );
  }
}

export default App;
