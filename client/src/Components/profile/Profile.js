import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import {Button} from 'react-bootstrap'

import { isAuthorized } from "../../JS/actions/actions";
import './Profile.css'

class Profile extends React.Component {
  componentDidMount() {
    this.props.isAuthorized();
  }
  render() {
    const { isAuth, profile } = this.props;
    return !isAuth ? (
      <Redirect to="/homeUser" />
    ) : (
      <div>
        <h1 className="title">WELCOME {profile.user.name}</h1>
    <p className="para-email">this is your email {profile.user.email}</p>
    <Link to={`/profile/${profile.user._id}/posts`}>
    <Button variant="secondary">Posts</Button>
    </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  profile: state.authReducer.profile,
});

export default connect(mapStateToProps, { isAuthorized })(Profile);
