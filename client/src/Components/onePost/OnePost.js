import React, { Component } from "react";
import { connect } from "react-redux";
import { Jumbotron, Button, FormControl, InputGroup } from "react-bootstrap";

import Comments from "../comment/Comments";
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

class OnePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      useFindAndModify: false,
      title: "",
      body: "",
      _id: this.props.likes._id,
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
      )
    this.props.checkAbiliteToLike(
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
    this.props.editPost(
      this.props.onePost.userId,
      this.props.onePost._id,
      this.state
    );
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
    );
  };

  removeOneLike = (e) => {
    this.props.removeLike(
      this.props.match.params.userId,
      this.props.match.params.postId,
    );
  };
  changeEditMode = () => {
    this.setState({ isEdit: !this.state.isEdit });
  };
  goBack =()=>{
    this.props.history.goBack()
  }

  render() {
    const { profile, isLoading, comments, onePost, abiliteToLike, likes } = this.props;
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
            onClick={()=>{this.deleteOnePost(); this.goBack() } }
          >
            DELETE
          </Button>
          <div>
            {abiliteToLike === true ? (
              <div>
                <Button onClick={this.addOneLike}
                  className="list-item-button"
                  >
                  <img
                    alt="unlike icon"
                    style={{ width: "30px" }}
                    src={require("../../assets/like.svg")}
                    />
                </Button>
                <p style={{ color: "black" }}>{likes.length}</p>
              </div>
            ) : (
              <div>
                <Button className="list-item-button" onClick={this.removeOneLike} >
                  
                  <img
                    alt="like icon"
                    style={{ width: "30px" }}
                    src={require("../../assets/unlike.webp")}
                  />
                </Button>
                <p style={{ color: "black" }}>{likes.length}</p>
              </div>
            )}
          </div>
          {/* <Like props={this.props.match.params.userId && this.props.match.params.postId}/> */}
        </Jumbotron>
        <form>
          <input
            placeholder="your comment ..."
            aria-describedby="basic-addon1"
            name="body"
            onChange={this.handleChange}
            value={this.state.body}
          />
          <button onClick={this.addOneComment}>Add comment</button>
        </form>
        {comments.map((comment, _id) => (
          <Comments comment={comment} key={_id} />
        ))}
      </div>
    ) : (
      <div>
        <Jumbotron>
          <h1>{title}</h1>
          <p>{body}</p>
          {abiliteToLike === true ? (
              <div>
                <Button onClick={this.addOneLike}
                  className="list-item-button"
                  >
                  <img
                    alt="unlike icon"
                    style={{ width: "30px" }}
                    src={require("../../assets/like.svg")}
                    />
                </Button>
                <p style={{ color: "black" }}>{likes.length}</p>
              </div>
            ) : (
              <div>
                <Button className="list-item-button" onClick={this.removeOneLike} >
                  
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
        <form onSubmit={this.addOneComment}>
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
  onePost: state.postReducer.onePost,
  isLoading: state.postReducer.isLoading,
  comments: state.commentReducer.comments,
  comment: state.commentReducer.comment,
  profile: state.authReducer.profile,
  likes: state.postReducer.likes,
  abiliteToLike: state.postReducer.abiliteToLike,
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
