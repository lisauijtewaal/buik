import React from 'react';
import Home from "../../pages/home";
import Diary from "../../pages/diary";
import Login from "../../pages/loginPage";
import Stress from "../../pages/stress";
import {Switch, Route, withRouter } from 'react-router-dom';

const RootComponent = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/login' exact component={Login} />
      <Route path='/dagboek' component={Diary} />
      <Route path='/stressinfo' component={Stress} />
    </Switch>
  );
}

export default withRouter(RootComponent);