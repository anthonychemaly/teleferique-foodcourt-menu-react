import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";

const Auth = () => {
  return (
    <div>
      <Switch>
        <Route to="/auth/login">
          <Login />
        </Route>
        <Redirect from="*" to="/admin/login" />
      </Switch>
    </div>
  );
};

export default Auth;
