const config = require("config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {User} = require("../models/User");

const secretOrKey = config.get("secretOrKey");
module.exports = userController = {
  register: async (req, res) => {
    const { name, accountType, email, password } = req.body;
    try {
      const searchResultRegister = await User.findOne({ email });
      if (searchResultRegister)
        return res
          .status(400)
          .json({ errors: "user already exist ! try another email adress" });
      const newUser = new User({
        name,
        accountType,
        email,
        password
      });
      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(password, salt, async (err, hash) => {
          if (err) throw err;
          try {
            newUser.password = hash;
            const addResult = await newUser.save();
            res.status(201).json(addResult);
          } catch (error) {
            res.status(500).json({ errors: error });
          }
        });
      });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const searchResultLogin = await User.findOne({ email });
      if (!searchResultLogin)
        return res.status(400).json({ errors: "user not exist" });
      const isMatch = await bcrypt.compare(
        password,
        searchResultLogin.password
      );
      if (!isMatch)
        return res.status(400).json({ errors: "password is not correct" });
      const payload = {
        id: searchResultLogin._id,
        name: searchResultLogin.name,
        email: searchResultLogin.email,
        accountType: searchResultLogin.accountType
      };
      jwt.sign(payload, secretOrKey, (err, token) => {
        if (err) throw err
        res.json({ token: `Bearer ${token}` });
      });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  }
};
