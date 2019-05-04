import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Icon
} from "semantic-ui-react";
import { connect } from "react-redux";
import { login, loadUser } from "../../actions/auth";
import "./Login.css";
import { Link, Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    loading: false
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = async e => {
    const { login, auth } = this.props;
    e.preventDefault();
    this.setState({
      loading: true
    });
    const { email, password } = this.state;
    await login(email, password);
    await loadUser();
  };

  render() {
    const { email, password, loading } = this.state;
    const { isAuthenticated, auth } = this.props;

    console.log(this.props.history.location.state);
    if (!isAuthenticated) {
      return (
        <Grid centered columns={2} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" textAlign="center">
              Login
            </Header>
            <Segment>
              <Form size="large" onSubmit={this.handleSubmit}>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  name="email"
                  placeholder="Email address"
                  value={email}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={this.handleChange}
                />

                <Button loading={loading} color="blue" fluid size="large">
                  Login
                </Button>
              </Form>
            </Segment>
            <Header as="h2" textAlign="center">
              OR
            </Header>
            <Segment textAlign="center">
              <Button compact className="oauth" color="google plus">
                <Icon name="google" />
                Google
              </Button>
              <Button compact className="oauth" color="facebook">
                <Icon name="facebook" /> Facebook
              </Button>
            </Segment>
            <Message align="center">
              Not registered yet? <Link to="/register">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { login, loadUser }
)(Login);
