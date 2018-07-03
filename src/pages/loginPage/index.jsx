import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './index.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="titel">Nieuw account</h1>
        <div className="loginText">
        <p>De huisarts heeft al een account voor jou aangemaakt. Wanneer je hier voor de eerste keer bent dien je de code van de huisarts in te vullen als wachtwoord. Deze kan je daarna op elk moment wijzigen in een eigen gekozen wachtwoord.</p>
        </div>
          <div>
          <label className="label" for="userName">Achternaam</label>
          <input type="text" id="username" name="username"
                 required />
        </div>

        <div>
          <label className="label" for="password">Wachtwoord</label>
          <input type="password" id="password" name="password"
                 minLength="8" required
                 placeholder="code van huisarts" />
        </div>
        <Link className="button "to='/dagboek'>Login</Link>
      </div>
    );
  }
}



export default App;