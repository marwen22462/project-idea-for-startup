import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import './HomeGuest.css'

const Home = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
      <Form inline>
        <Link to="/login">
          <Button variant="outline-light">Log in</Button>
        </Link>
        <Link to="/register">
          <Button variant="outline-light">Sign Up</Button>
        </Link>
      </Form>
    </Navbar>
  );
};

export default Home;
