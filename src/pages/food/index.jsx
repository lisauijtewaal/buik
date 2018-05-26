import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Soda from './soda';
import Fruit from './fruit'

class App extends Component {


  render() {
    return (
        <div className="diary">
          <Switch>
            {/*<Route path='/voeding' exact component={Soda}/>*/}
            <Route path='/voeding/koolzuur' component={Soda}/>
            <Route path='/voeding/fruit' component={Fruit}/>
          </Switch>
        </div>

    );
  }

}


export default App;
