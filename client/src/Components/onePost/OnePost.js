import React, { Component } from "react";
import { connect } from "react-redux";
import { Jumbotron, Button } from "react-bootstrap";

import PostModal from "../PostModal/PostModal";
import Comments from "../comment/Comments";
import { getOnePost, deletePost } from "../../JS/actions/post_actions";
import { getComments, addComment } from "../../JS/actions/comment_action";

class OnePost extends Component {
  
  state = { 
    show: false, 
    useFindAndModify: false,
    body: ""
  };
  toggleModal = () => this.setState({ show: !this.state.show });
  componentDidMount() {
    this.props.getOnePost(this.props.match.params.userId, this.props.match.params.postId);
    this.props.getComments(this.props.match.params.userId, this.props.match.params.postId);
  }

  deleteOnePost = (e) => {
    this.props.deletePost(this.props.match.params.id);
  };

  handleChange =(e)=> {
    this.setState({body: e.target.value})
  }
  addcomment = e =>{
    e.preventDefault()
    this.props.addComment(this.props.match.params.userId, this.props.match.params.postId, this.state)
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { title, body } = this.props.post;
    const { isLoading,comments } = this.props;

    return isLoading?(
      <p>loading comments ...</p>
    ) : (
      <div>
        <Jumbotron>
          <h1>{title}</h1>
          <p>{body}</p>

          <Button variant="primary" onClick={this.toggleModal}>
            EDIT{" "}
          </Button>
          {this.state.show && (
            <PostModal show={this.state.show} toggleModal={this.toggleModal} />
          )}

          <Button
            type="button"
            variant="danger"
            onClick={() => {
              this.deleteOnePost();
              this.goBack();
            }}
          >
            DELETE
          </Button>
        </Jumbotron>
        { ( comments.map((comment, key) => (
          <Comments comment={comment} key={key} />
        )))}
        <form onSubmit={this.addcomment}>
    <input
      placeholder="your comment ..."
      aria-describedby="basic-addon1"
      onChange={this.handleChange}
      
    />
   </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.postReducer.post,
  isLoading: state.postReducer.isLoading,
  comments: state.commentReducer.comments,
  // isLoading: state.commentReducer.isLoading,
});

export default connect(mapStateToProps, {
  getOnePost,
  deletePost,
  getComments,
  addComment
})(OnePost);
