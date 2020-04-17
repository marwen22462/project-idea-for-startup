const { ObjectID } = require("mongodb");
const { Comment, Post } = require("../models/User-Post");
module.exports = commentControlleur = {
  addComment: async (req, res) => {
    const postId = ObjectID(req.params.postId);
    const userId = ObjectID(req.params.userId);
    const { body } = req.body;
    try {
      const newComment = new Comment({
        body,
        postId,
        userId,
      });
      try {
        Comment.create(newComment, (err, doc) => {
          if (err) res.status(503).json({ errors: err });
          else {
            Post.findByIdAndUpdate(
              postId,
              { $push: { comments: doc } },
              { new: true },
              (err, data) => {
                if (err) res.status(504).json({ errors: err });
                else {
                  res.status(200).json({ msg: "comment added" });
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

  deleteComment: async (req, res) => {
    const { id } = req.body;
    try {
      const searchDeleteCommment = await Comment.findOneAndDelete(id);
      if (searchDeleteCommment)
        return res.status(200).json({ msg: "comment delete" });
      else return res.status(500).json({ errors: error });
    } catch (error) {
      res.status(501).json({ errors: error });
    }
  },
  editComment: async (req, res) => {
    const {id} = req.body;
    const  {body}  = req.body;
    try {
      const editRes = await Comment.findOneAndUpdate(
        { _id: id },
        { $set: { body } }
      );
       res.status(200).json({ editRes });
      
    } catch (error) {
      res.status(501).json({ errors: error });
    }
  },
};
