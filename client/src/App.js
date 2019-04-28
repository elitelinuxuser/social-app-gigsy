import React from "react";
import { BrowserRouter, Link, Route} from 'react-router-dom';

import Admin from './components/Admin/Admin';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import "semantic-ui-css/semantic.min.css";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Homepage} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/login/profile" exact component={Profile} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
