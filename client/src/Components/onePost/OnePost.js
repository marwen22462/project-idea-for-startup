import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Jumbotron,
  Button,
  FormControl,
  InputGroup,
  
} from "react-bootstrap";

import Comments from "../comment/Comments";
import Modal from "../modal/Molad";
import {
  getOnePost,
  deletePost,
  editPost,
  addLike,
  getlikes,
  checkAbiliteToLike,
  removeLike,
} from "../../JS/actions/post_actions";
import { getComments, addComment } from "../../JS/actions/comment_action";
import { isAuthorized } from "../../JS/actions/actions";

import "./OnePost.css";

class OnePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isEdit: false,
      title: "",
      body: "",
      show: false,
      date: new Date().toLocaleDateString(),
    };
  }
  componentDidMount() {
    this.props.isAuthorized();
    this.props.getOnePost(
      this.props.match.params.userId,
      this.props.match.params.postId
    );
    this.props.getlikes(
      this.props.match.params.userId,
      this.props.match.params.postId
    );
    this.props.checkAbiliteToLike(
      this.props.match.params.userId,
      this.props.match.params.postId
    );
  
  }
  componentDidUpdate(prevProps){
    if (prevProps.profile !== this.props.profile)
    this.setState({ name: this.props.profile.name });
  }
  componentWillMount() {
    this.props.getComments(
      this.props.match.params.userId,
      this.props.match.params.postId
    );
    // this.setState({ name: this.props.profile.name });
  }

clearInput =()=>{
  this.setState({body:""})
}
  deleteOnePost = (e) => {
    this.props.deletePost(
      this.props.match.params.userId,
      this.props.match.params.postId
    );
  };

  editPoste = (e) => {
    // e.preventDefault();
    this.props.editPost(
      this.props.onePost.userId,
      this.props.onePost._id,
      this.state
    );
    this.setState({ body: "" });
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
    this.setState({ body: "" });
  };

  addOneLike = () => {
    this.props.addLike(
      this.props.match.params.userId,
      this.props.match.params.postId,
      this.props.profile.name
    );
  };

  removeOneLike = (e) => {
    this.props.removeLike(
      this.props.match.params.userId,
      this.props.match.params.postId,
      this.props.likeId
    );
  };
  changeEditMode = () => {
    this.setState({ isEdit: !this.state.isEdit });
  };
  goBack = () => {
    this.props.history.goBack();
  };
  toggleModal = () => {
    this.setState({ show: !this.state.show });
  };

    arraySort = ()=>{

    }

  render() {
    const {
      profile,
      isLoading,
      comments,
      onePost,
      abiliteToLike,
      likes,
      likeData,
    } = this.props;
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
          onClick={() => {
            this.editPoste();
            this.changeEditMode();
          }}
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
    ) : isLoading ? (
      <div>loading</div>
    ) : this.props.profile.accountType === "admin" ||
      this.props.onePost.userId === this.props.profile._id ? (
      <div className="body-OnePost">
        <div id="wrapper">
            <div className="container">
              <div className="page-wrapper">
                    <Jumbotron>
                      <h1 >{title}</h1>
                      <p > posted by : {profile.name}</p>

                      <Button variant="primary" onClick={this.changeEditMode}>
                        Edit
                      </Button>

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
                      <div>
                        {abiliteToLike === true ? (
                          <div className="like-Section">
                            <button
                              onClick={this.addOneLike}
                              className="like-action-button"
                            >
                              <img
                                alt="like icon"
                                style={{ width: "30px" }}
                                src={require("../../assets/unlike.webp")}
                              />
                              <span className="toolTipText">j'aime</span>
                            </button>
                            <button
                              className="like-counter"
                              onClick={this.toggleModal}
                            >
                              {likes.length} likes
                            </button>
                            {this.state.show && (
                              <Modal
                                show={this.state.show}
                                toggleModal={this.toggleModal}
                                like={likeData}
                              />
                            )}
                          </div>
                        ) : (
                          <div className="like-Section">
                            <button
                              className="like-action-button"
                              onClick={this.removeOneLike}
                            >
                              <img
                                alt="unlike icon"
                                style={{ width: "30px" }}
                                src={require("../../assets/like.svg")}
                              />
                              <span className="toolTipText">j'aime plus</span>
                            </button>
                            <button
                              className="like-counter"
                              onClick={this.toggleModal}
                            >
                              {likes.length} likes
                            </button>
                            {this.state.show && (
                              <Modal
                                show={this.state.show}
                                toggleModal={this.toggleModal}
                                like={likeData}
                              />
                            )}
                          </div>
                        )}
                      </div>
                    </Jumbotron>{" "}
                    <p
                      className="post-body-onePostCard"
                      style={{ color: "black" }}
                    >
                      {body}
                    </p>
                    <div className="custombox clearfix">
                      <h4 className="small-title">
                        {comments.length} Comments
                      </h4>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="comments-list">
                            {comments.map((comment, _id) => (
                              <Comments comment={comment} key={_id} />
                            ))}{" "}
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <hr className="invis1" />
                    <div className="custombox clearfix">
                      <h4 className="small-title">Leave a comment</h4>
                      <div className="row">
                        <div   onSubmit={this.clearInput} className="col-lg-10">
                          <form
                            className="form-wrapper"
                            onSubmit={this.addOneComment}
                          >
                            <input
                            name="body"
                              placeholder="your comment ..."
                              aria-describedby="basic-addon1"
                              onChange={this.handleChange}
                              onSubmit={this.addOneComment}
                              className="form-control"
                              value={this.state.body}
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </div>

        {/* {comments.map((comment, _id) => (
          <Comments comment={comment} key={_id} />
        ))} */}
        
      </div>
    ) : (
      <div>
        <Jumbotron>
          <h1>{title}</h1>
          <p>{body}</p>
          {abiliteToLike === true ? (
            <div>
              <Button onClick={this.addOneLike} className="like-action-button">
                <img
                  alt="unlike icon"
                  style={{ width: "30px" }}
                  src={require("../../assets/like.svg")}
                />
              </Button>
              <Button style={{ color: "black" }}>{likes.length}</Button>
            </div>
          ) : (
            <div>
              <Button
                className="like-action-button"
                onClick={this.removeOneLike}
              >
                <img
                  alt="like icon"
                  style={{ width: "30px" }}
                  src={require("../../assets/unlike.webp")}
                />
              </Button>
              <p style={{ color: "black" }}>{likes.length}</p>
            </div>
          )}
        </Jumbotron>
        {comments.map((comment, _id) => (
          <Comments comment={comment} key={_id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.postReducer.post,
  onePost: state.postReducer.onePost,
  isLoading: state.postReducer.isLoading,
  comments: state.commentReducer.comments,
  comment: state.commentReducer.comment,
  profile: state.authReducer.profile,
  likes: state.postReducer.likes,
  abiliteToLike: state.postReducer.abiliteToLike,
  likeId: state.postReducer.likeId,
  likeData: state.postReducer.likeData,
});

export default connect(mapStateToProps, {
  isAuthorized,
  getOnePost,
  editPost,
  deletePost,
  getComments,
  addComment,
  addLike,
  getlikes,
  checkAbiliteToLike,
  removeLike,
})(OnePost);
