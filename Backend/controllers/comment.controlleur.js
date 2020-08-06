const { ObjectID } = require("mongodb");
const { Comment, Post } = require("../models/User-Post");
module.exports = commentControlleur = {
  addComment: async (req, res) => {
    const userId = ObjectID(req.params.userId);
    const postId = ObjectID(req.params.postId);
    const { body, date, name } = req.body;
    console.log(req.body)
    try {
      const newComment = new Comment({
        name,
        body,
        date,
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
                  res.status(200).json(newComment);
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
    const postId = ObjectID(req.params.postId);
    const { _id } = req.body;
    try {
      const post = await Post.findByIdAndUpdate(
        postId,
        {
          $pull:{comments:req.body._id},
        },
        {new:true}
        )
        if(!post){
          return res.status(410).json("comment not found")
        }
      const searchDeleteCommment = await Comment.findOneAndDelete({ _id: _id });
      if (searchDeleteCommment)
      res.status(200).json({ _id });
    } catch (error) {
      res.status(501).json({ errors: error });
    }
  },
  editComment: async (req, res) => {
    const { _id } = req.body;
    const { body } = req.body;
    try {
      const editRes = await Comment.findOneAndUpdate(
        { _id: _id },
        { $set: { body } }
      );
      res.status(200).json({ _id, body});
    } catch (error) {
      res.status(501).json({ errors: error });
    }
  },
};
