const { ObjectID } = require("mongodb");
const { Like, Post } = require("../models/User-Post");
module.exports = likeControlleur = {
  addLike: async (req, res) => {
    const userId = ObjectID(req.params.userId);
    const postId = ObjectID(req.params.postId);
    const { name } = req.body;
    try{

      const newLike = new Like({
        name,
        postId,
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
      }catch{
        res.status(501).json({errors:error})
      }
      },
    CheckExistingLike: async (req, res) => {
      const userId = ObjectID(req.params.userId);
      const postId = ObjectID(req.params.postId);
      try {
        searchTocheck = await Like.findOne({  postId, userId  })
        if (!searchTocheck) return res.status(200).json(true);
        else return res.status(201).json(searchTocheck);//to check
      } catch (error) {
        res.status(500).json({ errors: error });
      }
    },
    removeLike: async (req, res) => {
      const postId = ObjectID(req.params.postId);
      // const userId = ObjectID(req.params.userId);
      const {_id} =req.body
      try {
        
        const searchDeleteLike = await Post.findByIdAndUpdate(
          postId,
          {
            $pull:{likes:_id},
          },
          {new:false}
          )
          if(!searchDeleteLike){
            return res.status(410).json("like action not found")
          }
          const searchDeleteLikee = await Like.findOneAndDelete({ _id: _id });
      if (searchDeleteLikee)
      res.status(200).json({_id});
      } catch (error) {
        res.status(501).json({ errors: error });
      }
},
}
