import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import App from "../App";
import Movie from "./Movie";
import Actor from "./Actor";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/movie/:id' component={Movie} />
      <Router path='/actor/:id' component={Actor} />
    </Switch>
  </BrowserRouter>
);

export default Router;
