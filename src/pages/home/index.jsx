
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './index.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="titel">Krijg grip op jouw maag-en darmklachten</h1>
        <Link className="button "to='/login'>Login</Link> of  <Link className="button" to='/dagboek'>Maak een account</Link>
      </div>
    );
  }
}



export default App;