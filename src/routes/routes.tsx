import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Login from "../views/Login/login.view";
import Home from "../views/Home/home.view";

const NotFoundRedirect = () => <Redirect to="/login" />;

function Routes() {
  return (
    <Switch>
      <Route component={Login} path="/login" />
      <Route component={Home} path="/home" />
      <Route component={NotFoundRedirect} />
    </Switch>
  );
}
export default Routes;
