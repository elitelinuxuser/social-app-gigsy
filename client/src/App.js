import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Homepage from "./components/Homepage/Homepage";
import PrivateRoute from "./components/PrivateRoute";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
