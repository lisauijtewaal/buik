import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Start from './start';
import Stress from './stress';
import Food from './food';
import Movement from './movement';
import Results from './results';
import {DiaryContext} from "../../context/diary-context";
import stepsData from '../../data/steps';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setScore: this.setScore,
      results: {
        sport: {
          score: 1,
          question: stepsData.movement.steps.sport,
        },
        huishoudelijke_taken: {
          score: 1,
          question: stepsData.movement.steps.huishoudelijke_taken,
        },
        koolzuur: {
          score: 10,
          question: stepsData.food.steps.koolzuur,
        },
        fruit: {
          score: 10,
          question: stepsData.food.steps.fruit,
        },
        angst: {
          score: 5,
          question: stepsData.stress.steps.angst,
        },
        stress: {
          score: 5,
          question: stepsData.stress.steps.stress,
        },
      }
    }
  };

  /**
   *
   * @param type e.g. 'angst'
   * @param score e.g. 5
   */
  setScore = (type, score) => {
    const state = {...this.state};
    if(state.results[type]) {
      state.results[type].score = score;
    }
    this.setState(state);
  };

  render() {
    return (
      <DiaryContext.Provider value={this.state}>
        <div className="diary">
          <Switch>
            <Route path='/dagboek' exact component={Start}/>
            <Route path='/dagboek/ontspanning' component={Stress}/>
            <Route path='/dagboek/voeding' component={Food}/>
            <Route path='/dagboek/beweging' component={Movement}/>
            <Route path='/dagboek/resultaten' component={Results}/>
          </Switch>
        </div>
      </DiaryContext.Provider>

    );
  }

}


export default App;
