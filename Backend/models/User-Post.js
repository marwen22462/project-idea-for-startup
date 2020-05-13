const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  accountType: String,
  email: String,
  password: String,
  date: String,
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "message",
      autopopulate: true,
    },
  ],
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
  likes: [
    { 
      type: mongoose.Schema.Types.ObjectId,
       ref: "like",
       autopopulate: true 
      },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
      autopopulate: true,
    },
  ],
});
const likeSchema = new mongoose.Schema({
  date: String,
  userId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      autopopulate: true
    },
  ],
  userName: [
    {
      type: String,
      ref: "user",
      autopopulate: true
    },
  ],
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
  body: String,
  date: String,
});
const messageSchema = new mongoose.Schema({
  body: String,
  date: String,
  senderId: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  reciverId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

User = mongoose.model("user", userSchema);
Post = mongoose.model("post", postSchema);
Comment = mongoose.model("comment", commentSchema);
Message = mongoose.model("message", messageSchema);
Like = mongoose.model("like", likeSchema);

module.exports = {
  User,
  Post,
  Comment,
  Message,
  Like,
};
