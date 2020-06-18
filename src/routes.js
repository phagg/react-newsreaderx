import React from "react";

import { Switch, Route } from "react-router-dom";

import NewsParentContainer from "./shared/containers/NewsParentContainer";
import AboutUs from "./pages/aboutus";
import Login from "./pages/login";
import Workplace from "./pages/workplace";

export default () => (
  <Switch>
    <Route exact path="/" component={NewsParentContainer} />
    <Route exact path="/aboutus" component={AboutUs} />
    <Route exact path="/workplace" component={Workplace} />
    <Route exact path="/login" component={Login} />
  </Switch>
);
