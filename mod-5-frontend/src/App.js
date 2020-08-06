import React from "react";
import Content from "./components/Content";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import "./App.css";

class App extends React.Component {
  state = {
    user: null,
  };

  setUser = (user) => {
    this.setState({ user });
  };

  render() {
    const isUserLoggedIn = !!this.state.user;

    return (
      <Router>
        <div className="App">
          <div id="navbar-container">
            <Menu pointing secondary>
              <Menu.Item name="Homepage" as={Link} to="/homepage" />
              <Menu.Item name="Sign In" as={Link} to="/signin" />
              <Menu.Item name="Sign Up" as={Link} to="/signup" />
            </Menu>
          </div>
          <div id="main-container">
            <Route path="/homepage" render={(routerProps) => <Content />} />
            <Route path="/signin" render={(routerProps) => <SignIn />} />
            <Route path="/signup" render={(routerProps) => <SignUp />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
