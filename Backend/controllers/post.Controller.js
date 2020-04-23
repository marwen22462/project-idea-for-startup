const { ObjectID } = require("mongodb");
const { Post } = require("../models/User-Post");

module.exports = postController = {
  getPosts: async (req, res) =>{
    const userId = ObjectID(req.params.id)
    try {
      const searchPostofUser = await Post.find({userId})
      res.status(200).json(searchPostofUser)
    } catch (error) {
      res.status(500).json({errors:error})
    }
  },
  getOnePost: async (req,res) =>{
    const postId = ObjectID(req.params.postId)
    const userId = ObjectID(req.params.userId)
    try {
      const postRes= await Post.findOne(postId).populate('comments')
      res.status(200).json(postRes)
    } catch (error) {
      res.status(500).json({errors:error})
    } 
  },
  addPost: async (req, res) => {
    const userId = ObjectID(req.params.id)
    const {  title, body, postType } = req.body;
    try {
      const newPost = new Post({
        title,
        body,
        postType,
        userId
      });
      try {
        const addResult = await newPost.save();
        res.status(201).json(addResult);
      } catch (error) {
        res.status(500).json({ errors: error });
      }
    } catch (error) {
      res.status(501).json({ errors: error });
    }
  },
  deletePost: async (req, res) => {
    const id = ObjectID(req.params.postId);
    try {
      const searchDeleteResult = await Post.findOneAndDelete({ _id: id });
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
  getPostsByType: async (req, res) =>{
    const {postType1} = req.query;
    try {
      const searchResOfType = await Post.find({postType:postType1})
      res.status(200).json(searchResOfType)
    } catch (error) {
      res.status(500).json({errors:error})
    }
  }
};

