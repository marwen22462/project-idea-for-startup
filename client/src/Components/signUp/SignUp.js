import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Spinner, Form, Button } from "react-bootstrap";

import { register } from "../../JS/actions/actions";
import "./SignUp.css";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    accountType: "",
    date:new Date().toLocaleDateString()
  };
  handleChange = (e) =>
    this.setState({ ...this.state, [e.target.name]: e.target.value });

  register = (e) => {
    e.preventDefault();
    this.props.register(this.state);
  };
  render() {
    const { isLoading, user, errors } = this.props;
    return isLoading ? (
      <div>
        <Spinner animation="border" variant="success" />
        <span>Loading</span>
      </div>
    ) : user ? (
      <Redirect to="/login" />
    ) : (
      <Form className="form-signUp" onSubmit={this.register}>
        <h3 style={{ color: "white" }}>Welcome to Register page </h3>
        {errors ? (
          <div
            role="alert"
          >
            <code>
              {JSON.stringify(errors[0])}
            </code>
          </div>
        ) : null}
        <Form.Group controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder="Enter email"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group
          controlId="exampleForm.SelectCustom"
          onChange={this.handleChange}
        >
          <Form.Label>Choose your account type :</Form.Label>
          <Form.Control name="accountType" as="select" custom>
            <option defaultValue>choose account type ...</option>
            <option>admin</option>
            <option>entrepreneur</option>
            <option>junior</option>
            <option>incubator</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" onClick={this.register}>
          Register
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
  user: state.authReducer.user,
  errors: state.authReducer.errors,
});

export default connect(mapStateToProps, { register })(SignUp);
