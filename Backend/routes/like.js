const express = require('express')

const likeControlleur = require('../controllers/like.Controlleur')
const Router = express.Router()

Router.post('/profile/:userId/post/:postId/addLike', likeControlleur.addLike)

module.exports=Router