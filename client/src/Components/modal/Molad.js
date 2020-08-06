import React from 'react'
import {connect} from 'react-redux'

import {Button, Modal}from "react-bootstrap"

class Molad extends React.Component  {
    
    render(){
      const {likeData}= this.props
      return (
          
              
          <Modal
            show={this.props.show}
            onHide={this.props.toggleModal}
           
          >
            <Modal.Header closeButton>
              <Modal.Title>poeple ho like post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.props.likeData.map((like, key)=>(
                <div>
                  <p  style={{color:'black'}}>{like.name}</p><br/>
                </div>
              ))}
            </Modal.Body>
            <Modal.Footer>
              {/* <Button variant="secondary" onClick={this.props.toggleModal}>
                Close
              </Button> */}
            </Modal.Footer>
          </Modal>
        
          
      );

    }
}

const mapStateToProps =state=>({
    likeData: state.postReducer.likeData
})

export default connect(mapStateToProps) (Molad)
