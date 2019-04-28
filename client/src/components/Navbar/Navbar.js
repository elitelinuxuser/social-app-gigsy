import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import {Route} from 'react-router-dom/Route';

class Navbar extends React.Component {
  render () {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          HomePage
        </Link>
      <div className="right menu">
        <Link to="/login" className="item">
          Login
        </Link>
        <Link to="/Admin" className="item">
          Admin
        </Link>
      </div>
    </div>
    );
  }
}
export default Navbar;
