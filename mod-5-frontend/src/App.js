import React from "react";
import Content from "./components/Content";
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
      <Route path="/homepage" render={(routerProps) => <Content />} />
      <Route path="/loginform" render={(routerProps) => <LoginForm />} />
    </div>
  </Router>
);

export default App;
