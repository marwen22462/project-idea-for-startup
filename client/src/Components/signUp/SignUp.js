import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import { register } from "../../JS/actions/actions";
import "./SignUp.css";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    accountType: "",
    date: new Date().toLocaleDateString(),
  };
  handleChange = (e) =>
    this.setState({ ...this.state, [e.target.name]: e.target.value });

  register = (e) => {
    e.preventDefault();
    this.props.register(this.state);
  };

  render() {
    const { isLoading, user } = this.props;
    
    return isLoading ? (
      <div>
        <Spinner animation="border" variant="success" />
        <span>Loading</span>
      </div>
    ) : user ? (
      <Redirect to="/login" />
    ) : (
      
        <div className="container-page register-page">
          <div className="row">
            <div className="col-md-3 register-left">
              <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
              <h3>Welcome</h3>
              <p>You are 30 seconds away from start your start UP!</p>
              <Link to="/login">
              <button type="submit" href="/login" >Login</button>
              </Link>
              <br />
            </div>
            <div className="col-md-9 register-right">
              <ul
                className="nav nav-tabs nav-justified"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Register page
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <h3 className="register-heading">Register now for FREE</h3>
                  <div className="row register-form">
                    <div className="input-groupe">
                      <div className="form-group">
                        <input
                        name="name"
                          type="text"
                          className="form-control"
                          placeholder="Enter your name"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                        name="email"
                          type="text"
                          className="form-control"
                          placeholder=" Enter your Email address"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                        name="password"
                          type="password"
                          className="form-control"
                          placeholder=" Enter your password"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <div className="maxl">
                          <label className="radio inline">
                            <input
                              type="radio"
                              name="accountType"
                              value="Junior"
                              onChange={this.handleChange}
                            />
                            <span> Junior </span>
                          </label>
                          <label className="radio inline">
                            <input
                              type="radio"
                              name="accountType"
                              value="Entrepreneur"
                              onChange={this.handleChange}
                            />
                            <span> Entrepreneur </span>
                          </label>
                          <label className="radio inline">
                            <input
                              type="radio"
                              name="accountType"
                              value="Incubator"
                              onChange={this.handleChange}
                            />
                            <span> Incubator </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>

              <button type="submit" className="btnRegister" onClick={this.register} >Register</button>
            </div>
          </div>
        </div>
      
    );
  }
}
const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading,
  user: state.authReducer.user,
  errors: state.authReducer.errors,
});

export default connect(mapStateToProps, { register })(SignUp);
