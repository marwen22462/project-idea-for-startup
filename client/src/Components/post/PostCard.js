import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class PostCard extends React.Component {
  render() {
    const {post, allpost} = this.props
    // console.log(this.props.allpost);
    return post ? (

      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn4.iconfinder.com/data/icons/credit-card-payments/48/92-512.png"
        />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Link
            to={`/profile/${post.userId}/post/${post._id}`}
          >
            <Button variant="primary">view post</Button>
          </Link>
        </Card.Body>
      </Card>
    ): allpost? (

      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn4.iconfinder.com/data/icons/credit-card-payments/48/92-512.png"
        />
        <Card.Body>
          <Card.Title>{allpost.title}</Card.Title>
          <Card.Text>{allpost.body}</Card.Text>
          <Link
            to={`/profile/${allpost.userId}/post/${allpost._id}`}
          >
            <Button variant="primary">vieww post</Button>
          </Link>
        </Card.Body>
      </Card>
    ) :null
  }
}

const mapStateToProps = (state) => ({
  posts : state.postReducer.posts,
  userLog : state.authReducer.posts
});

export default connect(mapStateToProps)(PostCard);
