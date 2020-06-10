const express = require('express')

const likeControlleur = require('../controllers/like.Controlleur')
const Router = express.Router()

Router.post('/profile/:userId/post/:postId/addLike', likeControlleur.addLike)
Router.get('/profile/:userId/post/:postId/check', likeControlleur.CheckExistingLike)
Router.delete('/profile/:userId/post/:postId/remove', likeControlleur.removeLike)

module.exports=Router