import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import { setAlert } from "../../actions/alert";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Icon
} from "semantic-ui-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    verifyPassword: "",
    loading: false
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = async e => {
    e.preventDefault();
    const { register } = this.props;
    const { name, email, password } = this.state;

    this.setState({
      loading: true
    });

    await register({ name, email, password });

    this.setState({
      loading: false
    });
  };

  render() {
    const { name, email, password, loading } = this.state;
    return (
      <Grid centered columns={2} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" textAlign="center">
            Register
          </Header>
          <Segment>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                name="name"
                placeholder="Full Name"
                value={name}
                onChange={this.handleChange}
              />
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
                Register
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
            Already registered? <Link to="/login">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
