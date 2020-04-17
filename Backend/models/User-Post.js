const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  accountType: String,
  email: String,
  password: String,
});

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: String,
  body: String,
  comments:[{type: mongoose.Schema.Types.ObjectId, ref: 'comment',autopopulate: true}]
});

const commentSchema = new mongoose.Schema({
  postId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "post" 
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  body: String
})

User = mongoose.model("user", userSchema);
Post = mongoose.model("post", postSchema);
Comment = mongoose.model("comment", commentSchema)

module.exports = {
  User,
  Post,
  Comment,
};
