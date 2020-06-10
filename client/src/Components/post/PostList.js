import React, { Component } from "react";
import { connect } from "react-redux";
import { Spinner} from "react-bootstrap";

import { oneUser } from "../../JS/actions/actions";
import PostCard from "./PostCard";

import "./PostList.css";

class PostList extends Component {
  state = {
    show: false,
  };
  componentDidMount() {
    this.props.oneUser(this.props.match.params.id);
  }
    

  
  render() {
    const { user } = this.props;
    console.log(this.props)
    return !user ? (
      <Spinner animation="border" variant="success" />
    ) : (
      <div>
        <div className="post-list">
          {this.props.user.posts.map((post, key) => (
            <PostCard post={post} key={key} />
          ))}
        </div>
              </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading,
  profile: state.authReducer.profile,
  user: state.authReducer.user,
});

export default connect(mapStateToProps, { oneUser })(PostList);
