import React from 'react';
import Home from "../../pages/home";
import Diary from "../../pages/diary";
import {Switch, Route, withRouter } from 'react-router-dom';

const RootComponent = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/dagboek' component={Diary} />
    </Switch>
  );
}

export default withRouter(RootComponent);