import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AdminNavBar from "../components/AdminNavBar";
import EditListing from "../pages/EditListing";
import EditPrices from "../pages/EditPrices";

const Admin = () => {
  return (
    <div>
      <AdminNavBar />
      <Switch>
        <Route path="/admin/edit/:id" exact>
          <EditListing />
        </Route>
        <Route path="/admin/edit">
          <EditPrices />
        </Route>
        <Redirect from="*" to="/admin/edit" />
      </Switch>
    </div>
  );
};

export default Admin;
