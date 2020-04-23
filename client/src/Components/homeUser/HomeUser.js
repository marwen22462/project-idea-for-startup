import React from "react";
import { Navbar, Nav, Form, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getPostByType } from "../../JS/actions/post_actions";
import { isAuthorized } from "../../JS/actions/actions";
import PostCard from "../post/PostCard";

import "./HomeUser.css";

class HomeUser extends React.Component {
  state = {
    postType1: "post",
  };


  componentDidMount() {
    this.props.isAuthorized()
    // this.props.getPostByType(this.state);
  }


  componentDidUpdate(prevProps) {
    if (prevProps.profile !== this.props.profile) {
      this.props.getPostByType({
        postType1: this.props.profile.accountType === "entrepreneur" ? "post" : "idea"
      })
    }
  }
  
  logout = () => {
    localStorage.removeItem("token");
  };

  render() {
    console.log(this.props.profile);
    // console.log(this.props.posts);
    const { allposts, isLoading } = this.props;
    return isLoading ? (
      <Spinner animation="border" variant="success" />
    ) : (
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
            <Link to="/profile">
              <Button variant="outline-light">profile</Button>
            </Link>
          </Form>
        </Navbar>
        {allposts.map((allpost, key) => (
          <PostCard allpost={allpost} key={key} />
        ))}
      </div>
    );
  }
}

const MapStateToProps = (state) => ({
  profile: state.authReducer.profile,
  allposts: state.postReducer.allposts,
  isLoading: state.postReducer.isLoading,
});
export default connect(MapStateToProps, { isAuthorized, getPostByType })(
  HomeUser
);
