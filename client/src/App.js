import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Homepage from "./components/Homepage/Homepage";
import PrivateRoute from "./components/PrivateRoute";
import Admin from "./components/Admin/Admin";
import ProfileFirst from "./components/Profile/ProfileFirst";
import Register from "./components/Register/Register";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { loadUser } from "./actions/auth";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* <Route path="/profile" component={Profile} /> */}
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/admin" component={Admin} />
        <Route path="/profilefirst" component={ProfileFirst} />
      </Switch>
    </Router>
  );
};

export default App;
