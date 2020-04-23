import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Button, Navbar, Nav, Form} from 'react-bootstrap'

import { isAuthorized } from "../../JS/actions/actions";
import './Profile.css'

class Profile extends React.Component {
  componentDidMount() {
    this.props.isAuthorized();
  }
  logout = () => {
    localStorage.removeItem("token");
  };
  
  render() {
    const { isAuth, profile } = this.props;
    console.log(profile)
    return !isAuth ? (
      <h4>loading to go to profile</h4>
    ) : profile.accountType === "entrepreneur" ? (
<div>
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/homeUser">Home</Nav.Link>

          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
        <Form inline>
          <Link to="/">
            <Button variant="outline-light" onClick={this.logout}>
              Logout
            </Button>
          </Link>
          
        </Form>
      </Navbar>
        <h1 className="title">WELCOME {profile.name}</h1>
    <h3>account type : {profile.accountType}</h3>
    <p className="para-email">this is your email {profile.email}</p>
    <Link to={`/profile/${profile._id}/posts`}>
    <Button variant="secondary"  >Posts</Button>
    </Link>
    <Link to={{pathname:`/profile/${profile._id}/add`, state:{accountType:profile.accountType}}}>
    <Button variant="secondary"  >Add Post</Button>
    </Link>
      </div>
    ) :profile.accountType === "junior" ? (
      <div>
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/homeUser">Home</Nav.Link>

          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
        <Form inline>
          <Link to="/">
            <Button variant="outline-light" onClick={this.logout}>
              Logout
            </Button>
          </Link>
          
        </Form>
      </Navbar>
        <h1 className="title">WELCOME {profile.name}</h1>
        <h3>account type : {profile.accountType}</h3>
    <p className="para-email">this is your email {profile.email}</p>
    <Link to={`/profile/${profile._id}/posts`}>
    <Button variant="secondary"  >My Ideas</Button>
    </Link>
    <Link to={{pathname:`/profile/${profile._id}/add`, state:{accountType:profile.accountType}}}>
    <Button variant="secondary"  >Add new Idea</Button>
    </Link>
      </div>
    ): (
      <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/homeUser">Home</Nav.Link>

          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
        <Form inline>
          <Link to="/">
            <Button variant="outline-light" onClick={this.logout}>
              Logout
            </Button>
          </Link>
          
        </Form>
        </Navbar>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  profile: state.authReducer.profile,
});

export default connect(mapStateToProps, { isAuthorized })(Profile);
