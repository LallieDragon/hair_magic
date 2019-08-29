import React from "react";
import { Route, Switch } from "react-router-dom";

import NotFound from './components/NotFound';
import AboutContainer from './containers/AboutContainer';
import PoliciesContainer from './containers/PoliciesContainer';

// <Route path="/" exact component={HomeContainer} />
// <Route path="/contact" exact component={Contact} />
export default () =>
  <Switch>
    <Route path="/About%20Ashley" component={AboutContainer} />
    <Route path="/Policies" exact component={PoliciesContainer} />
    <Route component={NotFound} />
  </Switch>;
