import React from "react";
import { Navbar, Nav, Form, Button, Spinner } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import './HomeUser.css'

class Home extends React.Component {
  logout = () => {
    localStorage.removeItem("token");
  };

  render() {
    const { isLoading, profile } = this.props;
    return isLoading ? (
      <Spinner animation="border" variant="success" />
    ) : !profile ? (
      <Redirect to="/" />
    ) : (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>

          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
        <Form inline>
          <Link to="/">
            <Button variant="outline-light" onClick={this.logout}>
              Logout
            </Button>
          </Link>
          <Link to={`/profile/${profile.user._id}`}>
            <Button variant="outline-light">profile</Button>
          </Link>
        </Form>
      </Navbar>
    );
  }
}

const MapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading,
  profile: state.authReducer.profile,
});
export default connect(MapStateToProps)(Home);
