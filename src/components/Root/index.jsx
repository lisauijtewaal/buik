import React from 'react';
import Home from "../../pages/home";
import Diary from "../../pages/diary";
import foodInfo from "../../pages/food";
import movementInfo from "../../pages/movement";
import stressInfo from "../../pages/stress";
import {Switch, Route, withRouter } from 'react-router-dom';

const RootComponent = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/dagboek' component={Diary} />
      <Route path='/voeding/' component={foodInfo} />
      <Route path='/beweging/' component={movementInfo} />
      <Route path='/spanning/' component={stressInfo} />
    </Switch>
  );
}

export default withRouter(RootComponent);