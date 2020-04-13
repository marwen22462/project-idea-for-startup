import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import HomeGuest from "./Components/homeGuest/HomeGuest";
import SignUp from "./Components/signUp/SignUp";
import LogIn from "./Components/logIn/LogIn";
import Profile from "./Components/profile/Profile";
import HomeUser from "./Components/homeUser/HomeUser";
import PostList from "./Components/post/PostList";
import AddPost from "./Components/addPost/AddPost";
import OnePost from "./Components/onePost/OnePost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <HomeGuest />} />
        <Route exact path="/homeUser" render={() => <HomeUser />} />
        <Route exact path="/register" render={() => <SignUp />} />
        <Route exact path="/login" render={() => <LogIn />} />
        <Route exact path="/profile" render={() => <Profile />} />
        <Route exact path="/profile/:id/posts" render={(props) => <PostList {...props} />} />
        <Route excat path="/profile/:id/add" render={(props) => <AddPost {...props}/> } />
        <Route exact path="/profile/post/:id" render={(props) => <OnePost {...props}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
