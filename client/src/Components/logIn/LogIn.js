import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Form, Button, Spinner } from "react-bootstrap";

import { login } from "../../JS/actions/actions";
import "./Login.css";

class LogIn extends Component {
  handleChange = (e) =>
    this.setState({ ...this.state, [e.target.name]: e.target.value });

  login = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };
  render() {
    const { isLoading, errors } = this.props;
    return localStorage.getItem("token") ? (
      <Redirect to="/homeUser" />
    ) : isLoading ? (
      <Spinner animation="border" variant="success" />
    ) : (
      <Form className="form-logIn" onSubmit={this.login}>
        <h3 style={{ color: "white" }}>Welcome to Log In page </h3>
        {errors ? (
          <div>
            <pre>
              <code style={{color: 'white'}}>{JSON.stringify(errors)}</code>
            </pre>
          </div>
        ) : null}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="email"
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={this.login}>
          Log In
        </Button>
        <Button variant="danger" type="reset">
          Reset
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading,
  errors: state.authReducer.errors,
});

export default connect(mapStateToProps, { login })(LogIn);
