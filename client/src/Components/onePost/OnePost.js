import React, { Component } from "react";
import { connect } from "react-redux";
import { Jumbotron, Button } from "react-bootstrap";

import PostModal from "../PostModal/PostModal";
import { getOnePost, deletePost } from "../../JS/actions/post_actions";

class OnePost extends Component {
  state = { show: false, useFindAndModify: false };
  toggleModal = () => this.setState({ show: !this.state.show });
  componentDidMount() {
    this.props.getOnePost(this.props.match.params.id);
  }

  deleteOnePost=e=>{
    this.props.deletePost(this.props.match.params.id)
  }
  goBack=()=>{
    this.props.history.goBack();
}



render() {
  const { title, body } = this.props.getpost;
  console.log(this.props)
  
  return (
      <Jumbotron>
        <h1>{title}</h1>
        <p>{body}</p>
        
          <Button variant="primary" onClick={ this.toggleModal}>
            EDIT{" "}
          </Button>
          {this.state.show && (
            <PostModal
              show={this.state.show}
              toggleModal={this.toggleModal}
            />
          )}
         
        <Button type="button" variant="danger" onClick={()=>{ this.deleteOnePost(); this.goBack()}} >DELETE</Button>
      </Jumbotron>
    );
  }
}

const mapStateToProps = (state) => ({
  getpost: state.postReducer.getpost,
});

export default connect(mapStateToProps, { getOnePost,deletePost })(OnePost);
