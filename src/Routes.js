import React from "react";
import {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppClock from "./components/AppClock";
import LoginPage from "./containers/LoginPage";

export default class Routes extends Component {
render(){
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SIGN UP!</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <AppClock />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )}
}