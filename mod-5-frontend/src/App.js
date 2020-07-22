import React from "react";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import LoginForm from "./components/LoginForm";

import "./App.css";

const App = () => (
  <Router>
    <div className="App">
      <div>
        <Menu pointing secondary>
          <Menu.Item name="Homepage" as={Link} to="/homepage" />
          <Menu.Item name="Sign In" as={Link} to="/loginform" />
        </Menu>
      </div>
      <Route path="/homepage" component={Homepage} />
      <Route path="/loginform" component={LoginForm} />
    </div>
  </Router>
);

export default App;
