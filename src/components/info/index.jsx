import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';
import propTypes from "../../data/steps";

class App extends Component {
  render() {
    return <div className="information">
      <div className="image">
        <img className="image" src={propTypes.food.steps.fruit.image}/>
      </div>
      <div className="links"> <Link to='/dagboek/resultaten/top-3/' onClick={() => window.print()}>
      </Link></div>
      <div className="text">
      <h1>{propTypes.food.steps.fruit.text}</h1>
      <h3>{propTypes.food.steps.fruit.category}</h3>
      <p>{propTypes.food.steps.fruit.textfield}</p>

      <div className="tips">
        <h2>Wist je dat?</h2>
        <u>
        <li>{propTypes.food.steps.fruit.fact1}</li>
        <li>{propTypes.food.steps.fruit.fact2}</li>
        <li>{propTypes.food.steps.fruit.fact3}</li>
        </u>
      </div>
      <div className="help">
        <h2> Wat kan ik doen? </h2>
        <p>{propTypes.food.steps.fruit.help}</p>
      </div>
      </div>
    </div>;

  }



}


export default App;
