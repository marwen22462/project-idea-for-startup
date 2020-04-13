import React, { Component } from "react";
import { connect } from "react-redux";
import { Spinner} from "react-bootstrap";
// import {Link} from 'react-router-dom'

import { getPosts } from "../../JS/actions/post_actions";
import PostCard from "./PostCard";

import "./PostList.css";
// import PostModal from "../PostModal/PostModal";

class PostList extends Component {
  state = {
    show: false,
  };
  componentDidMount() {
    this.props.getPosts(this.props.match.params.id);
  }

  
  render() {
    const { isLoading, posts } = this.props;
    return isLoading ? (
      <Spinner animation="border" variant="success" />
    ) : (
      <div>
        <div className="post-list">
          {posts.map((post, key) => (
            <PostCard post={post} key={key} />
          ))}
        </div>
              </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.postReducer.isLoading,
  posts: state.postReducer.posts,
  profile: state.authReducer.profile,
});

export default connect(mapStateToProps, { getPosts })(PostList);
