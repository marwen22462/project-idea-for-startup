const express = require('express')

const commentControlleur = require('../controllers/comment.controlleur')
const Router = express.Router()

Router.post('/profile/:userId/post/:postId', commentControlleur.addComment)
Router.put('/profile/:userId/post/:postId', commentControlleur.editComment)
// Router.get('/profile/post/:id', commentControlleur.getAllComment)
Router.delete('/profile/:userId/post/:postId', commentControlleur.deleteComment)

module.exports=Router