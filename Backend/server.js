const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
const user = require('./routes/user')
const post = require('./routes/post')

app.use(express.json());

connectDB();

app.use('/', user,post)



const port = process.env.PORT || 5000;

app.listen(port, err =>
  err
    ? console.err("server is not running")
    : console.log(`server is running on port : ${port}`)
);