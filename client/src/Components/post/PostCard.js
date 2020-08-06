import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./PostCard.css";

class PostCard extends React.Component {
  render() {
    console.log(this.props)
    const { post, allpost,profile } = this.props;
    return post ? (
      <div className="col-xs-12 col-sm-6 col-md-4">
        <div
          className="image-flip"
          // ontouchstart="this.classList.toggle('hover');"
        >
          <div className="mainflip">
            <div className="frontside">
              <div className="card-post">
                <div className="card-body text-center">
                  <p>
                    <img
                      className=" img-fluid"
                      src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png"
                      alt="card image"
                    />
                  </p>
                  <h4 className="card-title">{post.title}</h4>
                </div>
              </div>
            </div>
            <div className="backside">
              <div className="card-post">
                <div className="card-body text-center mt-4">
                  <p className="card-body-text-card">{post.body}</p>
                  <Link
                    to={{
                      pathname: `/profile/${post.userId}/post/${post._id}`,
                      state: { name: this.props.profile.name },
                    }}
                  >
                    <Button variant="primary">view post</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) :  allpost ? (
      <div className="col-xs-12 col-sm-6 col-md-4">
        <div
          className="image-flip"
          // ontouchstart="this.classList.toggle('hover');"
        >
          <div className="mainflip">
            <div className="frontside">
              <div className="card-post">
                <div className="card-body text-center">
                  <p>
                    <img
                      className=" img-fluid"
                      src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png"
                      alt="card image"
                    />
                  </p>
                  <h4 className="card-title">{allpost.title}</h4>
                </div>
              </div>
            </div>
            <div className="backside">
              <div className="card-post">
                <div className="card-body text-center mt-4">
                  <p className="card-body-text-card">{allpost.body}</p>
                  <Link
                    to={{
                      pathname: `/profile/${allpost.userId}/post/${allpost._id}`,
                      state: { name: this.props.profile.name },
                    }}
                  >
                    <Button variant="primary">view post</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    ) : null;
  }
}

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
  profile: state.authReducer.profile,
  userLog: state.authReducer.posts,
});

export default connect(mapStateToProps)(PostCard);
