import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Table } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

import { isAuthorized } from "../../JS/actions/actions";
import { getAllUsers } from "../../JS/actions/admin-action";
import Search from "../search/Search";

import "./Dashboard.css";
import SearchUserType from "../search/SearchUserType";

class Dashboard extends Component {
  state = {
    x: 0,
    y: 0,
    z: 0,
    w: 0,
    postCounter: 0,
  };
  componentDidMount() {
    this.props.isAuthorized();
    this.props.getAllUsers();
  }

  logout = () => {
    localStorage.removeItem("token");
  };
  // toggleInfo = () => this.setState({ show: !this.state.show });

  // showUsers = () => {

  // };
  render() {
    const { profile, allUsers } = this.props;
    console.log(allUsers);
    return !profile ? (
      <h1>Loading...</h1>
    ) : profile.accountType === "admin" ? (
      <div>
        <div className="sidenav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
        </div>

        <div className="infos">
          <h3>{allUsers.length} in total users</h3>
        </div>
        <p className="hidden">
          {allUsers.map((alluser, key) =>
            alluser.accountType === "admin"
              ? (this.state.x = this.state.x + 1)
              : alluser.accountType === "entrepreneur"
              ? (this.state.y = this.state.y + 1)
              : alluser.accountType === "junior"
              ? (this.state.z = this.state.z + 1)
              : alluser.accountType === "incubator"
              ? (this.state.w = this.state.w + 1)
              : null
          )}
        </p>
        <Pie
          data={{
            labels: [
              `admin  : ${this.state.x}`,
              `entrepreneur :  ${this.state.y}`,
              `junio :  ${this.state.z}`,
              `incubator  ${this.state.w}`,
            ],
            datasets: [
              {
                label: "users types",
                data: [this.state.x, this.state.y, this.state.z, this.state.w],
                backgroundColor: [
                  "rgb(214, 122, 127)",
                  "hsla(30, 100%, 50%, .3)",
                  "rgb(255, 99, 132)",
                  "coral",
                ],
              },
            ],
          }}
          width={500}
          hight={400}
          options={{
            title: {
              display: true,
              text: "all users",
              fontSize: 25,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
        <div>
          <p className="hidden">
            {allUsers.map((alluser, key) =>
              alluser.posts.length > 0
                ? (this.state.postCounter = this.state.postCounter + 1)
                : null
            )}
          </p>
          <h2>
            Pourcentage of Reactive-Users : that have at least posted one
            article{" "}
          </h2>
          <ProgressBar
            className="dez"
            striped
            variant="info"
            width="200%"
            now={Math.ceil((this.state.postCounter * 100) / allUsers.length)}
            label={`${Math.ceil(
              (this.state.postCounter * 100) / allUsers.length
            )}%`}
          />
        </div>
        <Search />
        <SearchUserType />
        <Table className="table" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Date of registration</th>
              <th>Username</th>
              <th>UserType</th>
              <th>Email</th>
              <th>written posts</th>
              <th>Link to posts</th>
            </tr>
          </thead>
          {/* startting maping With Filter  */}
          <tbody>
            {allUsers
              .filter(
                (alluser) =>
                  alluser.name
                    .trim()
                    .toLowerCase()
                    .includes(this.props.searchInputName) &&
                  alluser.accountType
                    .trim()
                    .toLowerCase()
                    .includes(this.props.searchInputUserType)
              )
              .map((alluser, key) => (
                <tr key={key}>
                  <td className="text"> {alluser.date}</td>
                  <td className="text">{alluser.name} </td>
                  <td className="text">{alluser.accountType} </td>
                  <td className="text">{alluser.email}</td>
                  <td className="text"> {alluser.posts.length} posts </td>
                  <td>
                    {alluser.posts.map((post, key) => (
                      <Link to={`/profile/${alluser._id}/post/${post}`}>
                        post {key}
                      </Link>
                    ))}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        {/* Ending maping With Filter  */}
        {/* {allUsers.map((alluser, key) => (
            <div className="posts" key={key}>
              { alluser.posts.map((userPost)=>(
                <Link key={userPost._id} to={`/profile/${alluser._id}/post/${userPost._id}`}>
                <p>{userPost.body}</p>
                </Link>
              ))}
            </div>
          ))} */}
      </div>
    ) : (
      <h1>Error 404</h1>
    );
  }
}
const mapStateToProps = (state) => ({
  profile: state.authReducer.profile,
  allUsers: state.adminReducer.allUsers,
  searchInputName: state.adminReducer.searchInputName,
  searchInputUserType: state.adminReducer.searchInputUserType,
});
export default connect(mapStateToProps, {
  isAuthorized,
  getAllUsers,
})(Dashboard);
