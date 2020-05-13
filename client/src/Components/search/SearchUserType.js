import React, { Component } from "react";
import { connect } from "react-redux";
import { searchInputUserType } from "../../JS/actions/admin-action";

class SearchByUserType extends Component {
  state = { accountType: "" };
  changeHandler = (e) =>
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  searchInputUserType = (e) => {
    this.props.searchInputUserType(this.state.accountType);
  };
  render() {
    return (
      <div>
        <select
          className="form-control"
          type="text"
          name="accountType"
          onChange={this.changeHandler}
          onClick={this.searchInputUserType}
        >
          <option defaultValue=""></option>
          <option>entrepreneur</option>
          <option>junior</option>
          <option>incubator</option>
        </select>
      </div>
    );
  }
}
export default connect(null, {
  searchInputUserType,
})(SearchByUserType);