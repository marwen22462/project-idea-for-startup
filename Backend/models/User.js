const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  accountType: String,
  email: String,
  password: String,
  // posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
});

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: String,
  body: String,
});

User = mongoose.model("user", userSchema);
Post = mongoose.model("post", postSchema);

module.exports = {
  User,
  Post,
};
