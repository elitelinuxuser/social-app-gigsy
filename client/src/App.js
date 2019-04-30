import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Homepage from "./components/Homepage/Homepage";
import PrivateRoute from "./components/PrivateRoute";
import Admin from "./components/Admin/Admin";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Homepage} />
        <Route path="/login" component={Homepage} />
        <Route path="/profile" component={Profile} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
