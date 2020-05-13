const { ObjectID } = require("mongodb");
const { Like, Post } = require("../models/User-Post");
module.exports = likeControlleur = {
  addLike: async (req, res) => {
    const userId = ObjectID(req.params.userId);
    const postId = ObjectID(req.params.postId)
    const  {userName}  = req.body;
    try {
      const newLike = new Like({
        userName,
        userId,
      });
      try {
        Like.create(newLike, (err, doc) => {
          if (err) res.status(503).json({ errors: err });
          else {
            Post.findByIdAndUpdate(
              postId,
              { $push: { likes: doc } },
              { new: true },
              (err, data) => {
                if (err) res.status(504).json({ errors: err });
                else {
                  res.status(200).json(newLike);
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
  }
};
