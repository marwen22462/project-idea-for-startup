import React, { Component } from "react";
import { connect } from "react-redux";

import { sendMessage } from "../../JS/actions/message_action";

export class Messages extends Component {
  state = {
    body: "",
  };
  sendmessage = (e) => {
    e.preventDefault();
    this.props.sendMessage(
      this.props.match.params.senderId,
      this.props.match.params.reciverId,
      this.state
    );
  };

  handleChange = (e) => {
    this.setState({ body: e.target.value });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.sendmessage}>
          <input
            placeholder="sen message to the owner"
            aria-describedby="basic-addon1"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default connect(null, { sendMessage })(Messages);
