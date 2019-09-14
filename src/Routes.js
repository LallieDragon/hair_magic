import React from "react";
import { Route, Switch } from "react-router-dom";

import NotFound from './components/NotFound';
import AboutContainer from './containers/AboutContainer';
import PoliciesContainer from './containers/PoliciesContainer';
import PortfolioContainer from './containers/PortfolioContainer';
import ServicesContainer from './containers/ServicesContainer';

export default () =>
  <Switch>
    <Route path="/" exact component={AboutContainer} />
    <Route path="/About" exact component={AboutContainer} />
    <Route path="/Policies" exact component={PoliciesContainer} />
    <Route path="/Portfolio" exact component={PortfolioContainer} />
    <Route path="/Services" exact component={ServicesContainer} />
    <Route component={NotFound} />
  </Switch>;
