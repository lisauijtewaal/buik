import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));

document.querySelector('.nav').addEventListener('click', e => {e.target.classList.toggle('visible')});