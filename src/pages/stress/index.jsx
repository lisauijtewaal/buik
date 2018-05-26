import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Stress from './stress';
import Fear from './fear'

class App extends Component {


  render() {
    return (
        <div className="diary">
          <Switch>
            {/*<Route path='/voeding' exact component={Soda}/>*/}
            <Route path='/spanning/langdurige-stress' component={Stress}/>
            <Route path='/spanning/angst' component={Fear}/>
          </Switch>
        </div>

    );
  }

}


export default App;
