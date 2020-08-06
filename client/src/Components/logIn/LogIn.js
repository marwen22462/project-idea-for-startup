import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Form, Button, Spinner } from "react-bootstrap";

import { login } from "../../JS/actions/actions";
import "./Login.css";

class LogIn extends Component {
  state = {
    email: "",
    password: "",
  };
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
      <div className="container-login">
        <div className="d-flex justify-content-center h-100">
          <div className="card-login">
            <div className="card-header">
              <h3>LogIn</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    name="email"
                    type="text"
                    style={{ margin: "0px" }}
                    className="form-control"
                    placeholder="Enter email"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                  name="password"
                    type="password"
                    style={{ margin: "0px" }}
                    className="form-control"
                    placeholder="password"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                   
                    className="btn login_btn"
                    onClick={this.login}
                  >Login</button>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?<a href="/register">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      // <Form className="form-logIn" onSubmit={this.login}>
      //   <h3 style={{ color: "white" }}>Welcome to Log In page </h3>
      //   {errors ? (
      //     <div>
      //       <pre>
      //         <code style={{color: 'white'}}>{JSON.stringify(errors)}</code>
      //       </pre>
      //     </div>
      //   ) : null}
      //   <Form.Group controlId="formBasicEmail">
      //     <Form.Label>Email address</Form.Label>
      //     <Form.Control
      //       type="text"
      //       placeholder="Enter email"
      //       name="email"
      //       onChange={this.handleChange}
      //     />
      //     <Form.Text className="text-muted">
      //       We'll never share your email with anyone else.
      //     </Form.Text>
      //   </Form.Group>

      //   <Form.Group controlId="formBasicPassword">
      //     <Form.Label>Password</Form.Label>
      //     <Form.Control
      //       type="password"
      //       placeholder="Password"
      //       name="password"
      //       onChange={this.handleChange}
      //     />
      //   </Form.Group>
      //   <Button variant="primary" onClick={this.login}>
      //     Log In
      //   </Button>
      //   <Button variant="danger" type="reset">
      //     Reset
      //   </Button>
      // </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading,
  errors: state.authReducer.errors,
});

export default connect(mapStateToProps, { login })(LogIn);
