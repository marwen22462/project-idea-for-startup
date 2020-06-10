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
  }, ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
      autopopulate: true,
    },
  ],
});
// const likeSchema = new mongoose.Schema({
//   date: String,
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "user",
//     autopopulate: true,
//   },
//   postId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "post",
//   },
//   name: {
//     type: String,
//     ref: "user",
//     autopopulate: true,
//   },
// });

const commentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  body: String,
  date: String,
});


User = mongoose.model("user", userSchema);
Post = mongoose.model("post", postSchema);
Comment = mongoose.model("comment", commentSchema);
// Like = mongoose.model("like", likeSchema);

module.exports = {
  User,
  Post,
  Comment,
  // Like,
};
