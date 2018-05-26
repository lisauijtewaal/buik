import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Sport from './sport';
import Jobs from './jobs'

class App extends Component {


  render() {
    return (
        <div className="diary">
          <Switch>
            <Route path='/beweging/huishoudelijke-taken' component={Jobs}/>
            <Route path='/beweging/sport' component={Sport}/>
          </Switch>
        </div>

    );
  }

}


export default App;
