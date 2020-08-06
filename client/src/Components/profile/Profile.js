import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import {Button, Navbar, Nav, Form} from 'react-bootstrap'

import { isAuthorized, editUser } from "../../JS/actions/actions";
import PostList from "../post/PostList";
import "./Profile.css";

class Profile extends React.Component {
  state = {
    isEdit: false,
    name: "",
    email: "",
  };
  componentDidMount() {
    this.props.isAuthorized();
    // this.props.oneUser(this.props.profile._id)
  }
  logout = () => {
    localStorage.removeItem("token");
  };

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  toggleInput = () => {
    this.setState({ isEdit: !this.state.isEdit });
  };
  editUser = () => {
    this.props.editUser(
      this.props.profile._id,
      this.state.name,
      this.state.email
    );
  };
  render() {
    const { isAuth, profile } = this.props;
    console.log(this.props);
    return !isAuth ? (
      <h4>loading to go to profile</h4>
    ) : (
      <div id="page-wraper">
        <div className="responsive-nav">
          <i className="fa fa-bars" id="menu-toggle"></i>
          <div id="menu" className="menu">
            <i className="fa fa-times" id="menu-close"></i>
            <div className="container">
              <div className="image"></div>
              <div className="author-content">
                <h4>WELCOME {profile.name}</h4>
                <span>Web Designer</span>
              </div>
              <nav className="main-nav" role="navigation">
                <ul className="main-menu">
                  <div>
                    {!this.state.isEdit ? (
                      <p>{profile.name}</p>
                    ) : (
                      <input
                        onChange={this.handleChange}
                        defaultValue={this.props.profile.name}
                        name="name"
                        className="sideBarInput"
                      />
                    )}
                  </div>
                  <div>
                    {!this.state.isEdit ? (
                      <p>{profile.email}</p>
                    ) : (
                      <input
                        onChange={this.handleChange}
                        defaultValue={profile.email}
                        name="email"
                        className="sideBarInput"
                      />
                    )}
                  </div>
                  <div>
                    {!this.state.isEdit ? (
                      <button onClick={this.toggleInput}>EDIT Profile</button>
                    ) : (
                      <button onClick={this.editUser}>
                        <p onClick={this.toggleInput}>Save Changes</p>
                      </button>
                    )}
                  </div>
                  <li>
                    <Link
                      to={{
                        pathname: `/profile/${profile._id}/add`,
                        state: { accountType: profile.accountType },
                      }}
                    >
                      <button className="button">Add new Idea</button>
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="copyright-text">
                <p>Copyright 2019 Reflux Design</p>
              </div>
            </div>
          </div>
        </div>
        <section className="section about-me">
          <div className="container">
            <div className="section-heading">
              <h2>About Me</h2>
              <div className="line-dec"></div>
              <span>
                This is a Bootstrap v4.2.1 CSS Template for you. Edit and use
                this layout for your site. Updated on 21 May 2019 for repeated
                main menu HTML code.
              </span>
            </div>
          </div>
        </section>
        <div className='post-list-profile'>
          <PostList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  profile: state.authReducer.profile,
  user: state.authReducer.user,
});

export default connect(mapStateToProps, { isAuthorized, editUser })(Profile);
