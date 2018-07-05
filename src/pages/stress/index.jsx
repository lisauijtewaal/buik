import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import propTypes from "../../data/steps";


class App extends Component {
  render() {
    return <div className="information">
      <div className="image">
        <img className="image" src={propTypes.stress.steps.stress.image}/>
      </div>
      <div className="links"> <Link to='/dagboek/resultaten/top-3/' onClick={() => window.print()}>
      </Link></div>
      <div className="text">
        <h1>{propTypes.stress.steps.stress.text}</h1>
        <h3>{propTypes.stress.steps.stress.category}</h3>
        <p>{propTypes.stress.steps.stress.textfield}</p>
      </div>
      <div className="image">
        <img className="image" src={require('./circle.png')}/>
      </div>
      <div className="tips">
        <h2>Wist je dat?</h2>
        <p>{propTypes.stress.steps.stress.fact3}</p>
      </div>
      <div className="help">
        <h2> Wat kan ik doen? </h2>
        <p>Er zijn verschillende vaardigheden aan te leren die stress kunnen verminderen. Waaronder onderstaande oefeningen:</p>
        <ul>
          <li>
            <div className="textCard">
              <h4>Ontspanninsoefeningen</h4>
            </div>
          </li>
          <li>
            <div className="textCard">
              <h4>Kom in beweging</h4>
            </div>
          </li>
          <li>
            <div className="textCard">
              <h4>Ga op in muziek</h4>
            </div>
          </li>
        </ul>

        <p>{propTypes.stress.steps.stress.help}</p>

      </div>
    </div>;

  }



}





export default App;