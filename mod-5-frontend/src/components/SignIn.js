import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CreateUserContext } from "../context/CurrentUserContext";

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

const SignIn = (props) => {
  const { push } = useHistory();
  const [, setUser] = useContext(CreateUserContext);
  //const [state, setState] = useState({
  //  email: "",
  //  password: "",
  //  error: null,
  //});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const handleChange = (e) => {
  //  setState({
  //    ...state,
  //    [e.target.name]: e.target.value,
  //  });
  //};

  const post = () => {
    //  const { email, password } = state;
    const userData = { email, password };

    return fetch("http://localhost:3000/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify(userData),
    }).then((resp) => resp.json());
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await post();

      // props.setUser(response);
      localStorage.setItem("accessToken", response.token);
      push("/homepage");
    } catch (error) {
      // setState({ ...state, error: error.message });
      console.error(error.message);
    }
  };

  // render() {
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="yellow" textAlign="center"></Header>
        <h1>The Movie Database</h1>
        <img
          src={
            "https://cdn.dribbble.com/users/1866105/screenshots/6537273/s_film_logo_final.jpg"
          }
          alt="My logo"
          height={"150px"}
          width={"150px"}
        />
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Form.Input
              fluid
              icon="password"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <Button color="yellow" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="/Signup">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default SignIn;
