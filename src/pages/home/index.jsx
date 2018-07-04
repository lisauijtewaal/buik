
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './index.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="titel">Krijg grip op jouw maag-en darmklachten</h1>
        <Link to='/dagboek'>  <button className="button_start" type="button" onClick={this.scrollToTop}>
          Login
        </button></Link>
        <br /> of <br /> <Link to='/login'>  <button className="button_start" type="button" onClick={this.scrollToTop}>
        Maak een account
      </button></Link>
      </div>
    );
  }
}



export default App;