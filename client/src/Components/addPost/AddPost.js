import React, { Component } from "react";
import { connect } from "react-redux";
import {Form, Button} from 'react-bootstrap'

import {addPost} from '../../JS/actions/post_actions'

class AddPost extends Component {
  state = {
    title: "",
    body: "",
  };

  handleChange = (e) =>
    this.setState({ ...this.state, [e.target.name]: e.target.value })

  addpost = (e) => {
    // e.preventDefault(); 
    this.props.addPost(this.props.match.params.id, this.state );
  this.setState({title: "", body: ""})
  };
  
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" placeholder="Title" onChange ={this.handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Body</Form.Label>
          <Form.Control type="text" name="body" placeholder="Body" onChange ={this.handleChange}/>
        </Form.Group>

        <Button variant="primary" type="button" onClick={this.addpost}>
          Add
        </Button>
      </Form>
    );
  }
}

export default connect(null, {addPost})(AddPost);
