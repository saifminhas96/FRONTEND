import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Message,
} from "semantic-ui-react";

class SignUp extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCreate = (event) => {
    event.preventDefault();

    // const { firstname, lastname, email, password } = this.state;
    // const userData = { firstname, lastname, email, password };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: this.state }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
        });

        localStorage.setItem("jwt", res.jwt);
        return res;
      })
      .catch((error) => console.log(error.message));
  };

  render() {
    return (
      <div>
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 400 }}>
            <Header as="h2" color="yellow" textAlign="center"></Header>
            <Form size="large" onSubmit={this.handleCreate}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Please enter your first name"
                  name="firstname"
                  onChange={this.handleChange}
                  value={this.state.firstname}
                />
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Please enter your last name"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Please enter a valid e-mail address"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  iconPosition="left"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <Message
                  success
                  header="Form Completed"
                  content="You're all signed up"
                />

                <Button color="yellow" fluid size="large">
                  Sign Up
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
        ;
      </div>
    );
  }
}

export default SignUp;
