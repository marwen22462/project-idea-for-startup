const { ObjectID } = require("mongodb");
const { Message, User } = require("../models/User-Post.js");

module.exports = MessageControlleur = {
  sendMessage: async (req, res) => {
    const senderId  = ObjectID(req.params.senderId);
    const reciverId = ObjectID(req.params.reciverId);
    const { body, date } = req.body;
    try {
      const newMessage = new Message({
        body,
        date,
        senderId,
        reciverId,
      });
      try {
        Message.create(newMessage, (err, doc) => {
          if (err) res.status(503).json({ errors: error });
          else {
            User.findByIdAndUpdate(
                reciverId,
              { $push: { messages: doc } },
              { new: true },
              (err, data) => {
                if (err) res.status(504).json({ errors: error });
                else {
                  res.status(200).json({ msg: "message send success" });
                }
              }
            );
          }
        });
      } catch (error) {
        res.status(500).json({ errors: error });
      }
    } catch (error) {
        res.status(501).json({errors: error})
    }
  },
};
