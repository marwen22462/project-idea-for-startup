import React, { Component } from "react";
import { Card, InputGroup, Button, FormControl } from "react-bootstrap";
import { connect } from "react-redux";

import { editeComment, deleteComment } from "../../JS/actions/comment_action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
 
} from "@fortawesome/free-solid-svg-icons";

import "./comments.css";

class Comments extends Component {
  state = {
    body: "",
    _id: this.props.comment._id,
    isEdit: false,
  };
  editcomment = () => {
    this.props.editeComment(
      this.props.comment.userId,
      this.props.comment.postId,
      this.state
    );
  };
  deleteOneComment = () => {
    this.props.deleteComment(
      this.props.comment.userId,
      this.props.comment.postId,
      this.state._id
    );
  };
  changeEditMode = (e) => {
    e.preventDefault()
    this.setState({ isEdit: !this.state.isEdit });
  };
  handleChange = (e) => {
    this.setState({ body: e.target.value });
  };
  
  render() {
    const {body, date , name} = this.props.comment
    return this.state.isEdit ? (
      <InputGroup className="mb-3">
        <FormControl
          defaultValue={this.props.comment.body}
          onChange={this.handleChange}
          aria-describedby="basic-addon1"
        />
        <Button
          className="save-cancel-btn"
          variant="success"
          onClick={()=>{this.editcomment(); this.changeEditMode()} }
        >
          save change
        </Button>
        <Button
          className="save-cancel-btn"
          variant="danger"
          onClick={ this.changeEditMode}
        >
          cancel
        </Button>
      </InputGroup>
    ) : (
      <div className="media">
          <a className="media-left" href="#">
            <img
              src="https://cours-informatique-gratuit.fr/wp-content/uploads/2014/05/compte-utilisateur-1.png"
              alt=""
              className="rounded-circle"
            />
          </a>
          <div className="media-body">
            
            <h4 className="media-heading user-name">
              {name} 
            </h4>
            <p>{body}</p>
            <small> {date}</small>
            <div className="FloatRight">
              {" "}
              <a className="btn boutton btn-sm">
                <FontAwesomeIcon
                  id="FontAwesomeIcon"
                  onClick={this.changeEditMode}
                  color="green"
                  icon={faEdit}
                />
              </a>
              <a className="btn boutton btn-sm">
                <FontAwesomeIcon
                  
                  onClick={this.deleteOneComment}
                  color="red"
                  icon={faTrashAlt}
                />
              </a>
            </div>
          </div>
        </div>


      // <ListGroup>
      //   <ListGroup.Item variant="info">
      //     {this.props.comment.body}
      //     <InputGroup.Append>
      //       <Button className="list-item-button" onClick={this.changeEditMode}>
      //         {" "}
      //         <img
      //           alt="edit icon"
      //           style={{ width: "30px" }}
      //           src={require("../../assets/edit.svg")}
      //         />
      //       </Button>
      //       <Button
      //         className="list-item-button"
      //         onClick={this.deleteOneComment }
          
      //       >
      //         <img
      //           alt="delete icon"
      //           style={{ width: "30px" }}
      //           src={require("../../assets/delete.ico")}
      //         />
      //       </Button>
      //     </InputGroup.Append>
      //   </ListGroup.Item>
      // </ListGroup>
    );
  }
}

const mapStateToProps = (state) => ({
  editedComment: state.commentReducer.editedComment,
  msg: state.commentReducer.msg,
});

export default connect(mapStateToProps, { editeComment, deleteComment, })(
  Comments
);
