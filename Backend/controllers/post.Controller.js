const { ObjectID } = require("mongodb");
const { Post, User } = require("../models/User-Post");

module.exports = postController = {
  getPosts: async (req, res) => {
    const userId = ObjectID(req.params.id);
    try {
      const searchPostofUser = await User.find( userId ).populapte("posts");
      res.status(200).json(searchPostofUser);
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
  getOnePost: async (req, res) => {
    const postId = ObjectID(req.params.postId);
    try {
      const postRes = await Post.findOne(postId).populate("comments");
      res.status(200).json(postRes);
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
  addPost: async (req, res) => {
    const userId = ObjectID(req.params.id);
    const { title, body,date, postType } = req.body;
    try {
      const newPost = new Post({
        title,
        body,
        date,
        postType,
        userId,
      });
      try {
        Post.create(newPost, (err, doc) => {
          if (err) res.status(503).json({ errors: error });
          else {
            User.findByIdAndUpdate(
              userId,
              { $push: { posts: doc } },
              { new: true },
              (err, data) => {
                if (err) res.status(504).json({ errors: error });
                else {
                  res.status(200).json(data);
                }
              }
            );
          }
        });
      } catch (error) {
        res.status(500).json({ errors: error });
      }
    } catch (error) {
      res.status(501).json({ errors: error });
    }
  },
  deletePost: async (req, res) => {
    const postId = ObjectID(req.params.postId);
    try {
      const searchDeleteResult = await Post.findOneAndDelete({ _id: postId });
      if (searchDeleteResult)
        return res.status(201).json({ msg: "post deleted" });
      else return res.status(400).json({ errore: error });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
  editPost: async (req, res) => {
    const id = ObjectID(req.params.id);
    const { title, body } = req.body;
    try {
      const searchEditResult = await Post.findOneAndUpdate(
        { _id: id },
        { $set: { title, body } }
      );
      if (searchEditResult)
        return res.status(201).json({ msg: "post edited with success" });
      else return res.status(400).json({ errore: error });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
  getPostsByType: async (req, res) => {
    const { postType1 } = req.query;
    try {
      const searchResOfType = await Post.find({ postType: postType1 });
      res.status(200).json(searchResOfType);
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
};
