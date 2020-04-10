import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import HomeGuest from "./Components/homeGuest/HomeGuest";
import SignUp from "./Components/signUp/SignUp";
import LogIn from "./Components/logIn/LogIn";
import Profile from "./Components/profile/Profile";
import HomeUser from "./Components/homeUser/HomeUser";
import PostList from './Components/post/PostList'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" render={() => <HomeGuest />} />
        <Route exact path="/homeUser" render={() => <HomeUser />} />
        <Route exact path="/register" render={() => <SignUp />} />
        <Route exact path="/login" render={() => <LogIn />} />
        <Route path="/profile" render={()=> <Profile />} />
        <Route exact path='/profile/:id/posts' render={(props)=> <PostList {...props} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
