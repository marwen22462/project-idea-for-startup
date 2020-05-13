import React, { Component } from "react";
import { connect } from "react-redux";
import { Jumbotron, Button, FormControl, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import Comments from "../comment/Comments";
import {
  getOnePost,
  deletePost,
  editPost,
  addLike
} from "../../JS/actions/post_actions";
import { getComments, addComment } from "../../JS/actions/comment_action";
import { isAuthorized } from "../../JS/actions/actions";

class OnePost extends Component {
  state = {
    isEdit: false,
    useFindAndModify: false,
    title: "",
    body: "",
    
  };
  componentDidMount() {
    this.props.isAuthorized();
    this.props.getOnePost(
      this.props.match.params.userId,
      this.props.match.params.postId
    );
  }
  componentWillMount() {
    this.props.getComments(
      this.props.match.params.userId,
      this.props.match.params.postId
    );
  }

  deleteOnePost = (e) => {
    this.props.deletePost(
      this.props.match.params.userId,
      this.props.match.params.postId
    );
  };

  editPoste = (e) => {
    // e.preventDefault();
    this.props.editPost(this.props.onePost._id, this.state);
  };

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  addOneComment = (e) => {
    e.preventDefault();
    this.props.addComment(
      this.props.match.params.userId,
      this.props.match.params.postId,
      this.state
    );
  };

  addOneLike=()=>{
    this.props.addLike(
      this.props.match.params.userId,
      this.props.match.params.postId,
      this.props.profile.name
    )
  }

  changeEditMode = () => {
    this.setState({ isEdit: !this.state.isEdit });
  };

  goBack = () => {
    this.props.history.goBack();
  };


  render() {
    const { profile,isLoading, comments, onePost } = this.props;
    const { title, body } = onePost;
    console.log(this.props);
    return !profile ? (
      <div>loading</div>
    ) : this.state.isEdit ? (
      <InputGroup className="mb-3">
        <FormControl
          defaultValue={title}
          name="title"
          onChange={this.handleChange}
          aria-describedby="basic-addon1"
        />
        <FormControl
          defaultValue={body}
          name="body"
          onChange={this.handleChange}
          aria-describedby="basic-addon1"
        />
        <Button
          className="save-cancel-btn"
          variant="success"
          onClick={()=> {this.editPoste(); this.changeEditMode(); this.goBack()}}
        >
          save change
        </Button>
        <Button
          className="save-cancel-btn"
          variant="danger"
          onClick={this.changeEditMode}
        >
          cancel
        </Button>
      </InputGroup>
    ) :isLoading?(
<div>loading</div>
    ): this.props.profile.accountType === "admin" ||
      this.props.onePost.userId === this.props.profile._id ? (
      <div>
        <Jumbotron>
          <h1>{title}</h1>
          <p>{body}</p>

          <Button variant="primary" onClick={this.changeEditMode}>
            EDIT
          </Button>

          <Button
            type="button"
            variant="danger"
            onClick={() => {
              this.deleteOnePost();
            }}
          >
            DELETE
          </Button>
          <Button className="list-item-button" onClick={this.addOneLike}>
              {" "}
              <img
                alt="edit icon"
                style={{ width: "30px" }}
                src={require("../../assets/like.svg")}
              />
            </Button>
            {console.log(this.props.like)}
        </Jumbotron>
        {comments.map((comment) => (
          <Comments comment={comment} key={comment._id} />
        ))}
        <form onSubmit={this.addOneComment}>
          <input
            placeholder="your comment ..."
            aria-describedby="basic-addon1"
            name="body"
            onChange={this.handleChange}
          />
        </form>
      </div>
    ) : (
      <div>
        <Jumbotron>
          <h1>{title}</h1>
          <p>{body}</p>
        </Jumbotron>
        {comments.map((comment) => (
          <Comments comment={comment} key={comment._id} />
        ))}
        <form onSubmit={this.addcomment}>
          <input
            placeholder="your comment ..."
            aria-describedby="basic-addon1"
            onChange={this.handleChange}
          />
        </form>
        <Link
          to={`/profile/${this.props.profile._id}/post/${this.props.match.params.userId}/message`}
        >
          send messageto the owner
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.postReducer.post,
  onePost: state.postReducer.onePost,
  isLoading: state.postReducer.isLoading,
  comments: state.commentReducer.comments,
  profile: state.authReducer.profile,
  like: state.postReducer.like
});

export default connect(mapStateToProps, {
  isAuthorized,
  getOnePost,
  editPost,
  deletePost,
  getComments,
  addComment,
  addLike
})(OnePost);
