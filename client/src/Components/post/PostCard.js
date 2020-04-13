import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import PostModal from "../PostModal/PostModal";

class PostCard extends React.Component {
  
  render() {
    // const {post} = this.props
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn4.iconfinder.com/data/icons/credit-card-payments/48/92-512.png"
        />
        <Card.Body>
          <Card.Title>{this.props.post.title}</Card.Title>
          <Card.Text>{this.props.post.body}</Card.Text>
          <Link to={`/profile/post/${this.props.post._id}`}>
            <Button variant="primary">
              edit post
            </Button>
           
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

export default PostCard;
