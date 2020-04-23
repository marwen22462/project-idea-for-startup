import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";

import { addPost } from "../../JS/actions/post_actions";

class AddPost extends Component {
  state = {
    title: "",
    body: "",
    video: "",
    postType: "",
  };

  componentDidMount() {
    if (this.props.location.state.accountType === "entrepreneur")
      this.setState({ postType: "post" });
    else this.setState({ postType: "idea" });
  }

  handleChange = (e) =>
    this.setState({ ...this.state, [e.target.name]: e.target.value });

  addpost = (e) => {
    this.props.addPost(this.props.match.params.id, this.state);
  };

  render() {
    console.log(this.props.location.state.accountType);
    return this.props.location.state.accountType === "entrepreneur" ? (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Body</Form.Label>
          <Form.Control
            type="text"
            name="body"
            placeholder="Body"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={this.addpost}>
          Add
        </Button>
      </Form>
    ) : (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Body</Form.Label>
          <Form.Control
            type="text"
            name="body"
            placeholder="Body"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="ControlInput1">
          <Form.Label>link for video presentation</Form.Label>
          <Form.Control
            type="text"
            name="video"
            placeholder="put your video link"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={this.addpost}>
          Add
        </Button>
      </Form>
    );
  }
}

export default connect(null, { addPost })(AddPost);
