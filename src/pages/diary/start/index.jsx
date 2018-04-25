import React, {Component} from 'react';
import { Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welkom bij mijn dagboek</h1>
        <Link to='/dagboek/ontspanning'>Start</Link>
      </div>
    );
  }
}

export default App;
