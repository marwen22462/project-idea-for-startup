import React, { Component } from "react";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";

import { getPosts } from "../../JS/actions/post_actions";
import PostCard from "./PostCard"

class PostList extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { isLoading, posts } = this.props;
    console.log(posts)
    return isLoading ? (
      <Spinner animation="border" variant="success" />
    ) : (
      <div>
        {posts.map((post, key) => (
          <PostCard post={post} key={key} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.postReducer.isLoading,
  posts: state.postReducer.posts
});

export default connect(mapStateToProps, { getPosts })(PostList);
