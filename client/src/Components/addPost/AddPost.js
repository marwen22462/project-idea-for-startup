import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'

import {isAuthorized} from '../../JS/actions/actions'
import { addPost } from "../../JS/actions/post_actions";

class AddPost extends Component {
  state = {
    title: "",
    body: "",
    video: "",
    postType: "",
    date:new Date().toLocaleDateString()
  };

  componentDidMount() {
    this.props.isAuthorized()
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
    console.log(this.props);
    const {id}= this.props.match.params.id;
    const   { isAuth, profile}= this.props
    return !isAuth ? (
      <h4>loading to go to profile</h4>
    ) : this.props.location.state.accountType === "entrepreneur" ? (
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
        {/* <Link to={`/profile/${id}/posts`}>
          <h5>move </h5>
         </Link> */}
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
        <Link to={`/profile/${profile._id}/posts`}>
        <button onClick={this.addpost}>
           Add
      </button>
      </Link>
      </Form>
    );
  }
}

const mapStateToProps = (state) =>({
  isAuth: state.authReducer.isAuth,
  profile: state.authReducer.profile
})

export default connect(mapStateToProps, { addPost,isAuthorized })(AddPost);
