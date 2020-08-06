import React, { Component } from "react";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";

import { oneUser, isAuthorized } from "../../JS/actions/actions";
import PostCard from "./PostCard";

import "./PostList.css";

class PostList extends Component {
  state = {
    show: false,
  };
  componentDidMount() {
    this.props.isAuthorized();
    this.props.oneUser(this.props.profile._id);
  }

  render() {
    const { profile, user } = this.props;
    console.log(this.props)
    return !profile ? (
      <p>loading</p>
    ) : !user ? (
      <Spinner animation="border" variant="success" />
    ) : (
      <div>
        <section id="team" className="pb-5">
          <div className="container">
            <h5 className="section-title h1">YOUR POSTS</h5>
            <div className="row">
              {this.props.user.posts.map((post, key) => (
                <PostCard post={post} key={key} 
                   />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading,
  profile: state.authReducer.profile,
  user: state.authReducer.user,
});

export default connect(mapStateToProps, { oneUser, isAuthorized })(PostList);
