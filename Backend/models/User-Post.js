const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  accountType: String,
  email: String,
  password: String,
  date: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
      autopopulate: true,
    },
  ],
});

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: String,
  date: String,
  body: String,
  postType: String,
  likes: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "like",
    autopopulate: true,
  }, ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
      autopopulate: true,
    },
  ],
});
const likeSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
    ref: "user",
  },
});

const commentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: String,
  body: String,
  date: String,
});


User = mongoose.model("user", userSchema);
Post = mongoose.model("post", postSchema);
Comment = mongoose.model("comment", commentSchema);
Like = mongoose.model("like", likeSchema);

module.exports = {
  User,
  Post,
  Comment,
  Like,
};
