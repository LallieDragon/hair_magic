import React from "react";
import { Route, Switch } from "react-router-dom";

import NotFound from './components/NotFound';

// <Route path="/" exact component={HomeContainer} />
// <Route path="/contact" exact component={Contact} />
export default () =>
  <Switch>
    <Route component={NotFound} />
  </Switch>;
