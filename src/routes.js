import React from 'react';
import { Switch, Route } from 'react-router-dom';

import outlets from './pages/Outlets';
import registration from './pages/Registration';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={outlets} />
      <Route path="/register" component={registration} />
    </Switch>
  );
}
