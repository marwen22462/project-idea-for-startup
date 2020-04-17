import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Form, Button } from "react-bootstrap";

import { editPost } from "../../JS/actions/post_actions";

class PostModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }
  componentDidMount() {
    if (this.props.post)
      this.setState({
        title: this.props.post.title,
        body: this.props.post.body,
      });
      
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  editPoste = (e) => {
    // e.preventDefault();
    this.props.editPost(this.props.post._id, this.state);
  };
   refreshPage=()=> {
    window.location.reload(false);
  }

  render() {
    const { title, body } = this.props.post;
    return (
      <Modal
        show={this.props.show}
        onSubmit={this.props.toggleModal}
        onHide={this.props.toggleModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit your Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="text">
              <Form.Label style={{ color: "black" }}>Title</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                defaultValue={title}
                name="title"
              />
            </Form.Group>
            <Form.Group controlId="text">
              <Form.Label style={{ color: "black" }}>Body</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                defaultValue={body}
                name="body"
              />
            </Form.Group>
            <Button type="submit" onClick={()=>{ this.editPoste(); this.refreshPage()}}>
              submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.postReducer.post,
});

export default connect(mapStateToProps, { editPost })(PostModal);
