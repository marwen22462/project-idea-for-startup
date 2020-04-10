import React, { Component } from "react";
import {connect} from 'react-redux'
import {Card, Button} from 'react-bootstrap'

class Posts extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{posts.title}</Card.Title>
            <Card.Text>
              {posts.body}
            </Card.Text>
            <Button variant="primary">edit post</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state =>({
    posts : state.postReducer.posts
})

export default connect(mapStateToProps) (Posts);
