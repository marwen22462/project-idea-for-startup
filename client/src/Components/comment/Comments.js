import React, { Component } from 'react'
import {ListGroup, InputGroup, Button, FormControl} from 'react-bootstrap'
import {connect} from 'react-redux'

import {editeComment, deleteComment} from '../../JS/actions/comment_action'

import './comments.css'

 class Comments extends Component {
     state={
        body:"",
        id:this.props.comment._id,
         isEdit:false
     }
     editcomment=()=>{
         this.props.editeComment(this.props.comment.userId , this.props.comment.postId, this.state)
     }
     deleteonecomment=(e)=>{
         this.props.deleteComment(this.props.comment.userId, this.props.comment.postId, this.state)
     }
     changeEditMode =()=> {
        this.setState({isEdit: !this.state.isEdit})
      }
      handleChange=(e)=>{
          this.setState({body: e.target.value})
      }
      updateCommentValue = (e) =>{
          this.setState({
              isEdit:false,
          })
      }
    render() {
        console.log(this.state)
        return this.state.isEdit?(
            <InputGroup className="mb-3">
    
    <FormControl
      defaultValue={this.props.comment.body}
      onChange={this.handleChange}
      aria-describedby="basic-addon1"
    />
    <Button className='save-cancel-btn' variant='success' onClick={()=>{this.editcomment() ;this.updateCommentValue()} } >save change</Button>
    <Button className='save-cancel-btn' variant='danger'  onClick={this.changeEditMode} >cancel</Button>
  </InputGroup>
        ): (
            <ListGroup>
  <ListGroup.Item variant="info">{this.props.comment.body} <InputGroup.Append>
     <Button className="list-item-button" onClick={this.changeEditMode}> <img alt="edit icon" style={{width: "30px"}}  src={require('../../assets/edit.svg')} /></Button>
     <Button className="list-item-button" onClick={this.deleteonecomment} ><img alt="delete icon" style={{width: "30px"}} src={require('../../assets/delete.ico')} /></Button>
    </InputGroup.Append></ListGroup.Item>

</ListGroup>
        )
    }
}


const mapStateToProps = state =>({
    editedComment : state.commentReducer.editedComment,
    msg : state.commentReducer.msg
})

export default connect(mapStateToProps, {editeComment, deleteComment}) (Comments)