import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import { HashRouter } from 'react-router-dom';
import Root from './components/Root';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Root />
      </HashRouter>
    );
  }
}

export default App;
