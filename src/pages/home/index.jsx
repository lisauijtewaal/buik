
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './index.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="logo" src={require('../../images/logo.png')}/> <br />
        <h1 className="titel">Krijg grip op jouw PDS klachten</h1>
        <Link className="button "to='/dagboek'>Login</Link> of  <Link className="button" to='/dagboek'>Maak een account</Link>
      </div>
    );
  }
}



export default App;