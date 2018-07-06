
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './index.css';



class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="image_home">
        <img src={require('../../images/illustation.png')}/>
        <h2 className="titel">Krijg grip op jouw maag-en darmklachten</h2>
      </div>
        <Link to='/login'>  <button className="button_start" type="button" onClick={this.scrollToTop}>
        Maak een account
      </button></Link>
        <div className="log">
        <p> Heb je al een account?</p> <Link to='/dagboek' className="inline" >Login</Link>
      </div>
      </div>
    );
  }
}



export default App;