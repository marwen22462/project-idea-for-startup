const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
const user = require('./routes/user')
const post = require('./routes/post')
const comment = require('./routes/comment')
const message = require('./routes/message')
const admin = require('./routes/admin')
const like = require('./routes/like')

app.use(express.json());

connectDB();

app.use('/', user,post,comment, message, admin, like)



const port = process.env.PORT || 5000;

app.listen(port, err =>
  err
    ? console.err("server is not running")
    : console.log(`server is running on port : ${port}`)
);