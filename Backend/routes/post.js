const express = require('express')

const postController = require('../controllers/post.Controller')
const Router = express.Router()

Router.get('/profile/:id/posts', postController.getPosts)
Router.get('/profile/:userId/post/:postId',postController.getOnePost)
Router.post('/profile/:id/add', postController.addPost)
Router.delete('/profile/post/:id', postController.deletePost)
Router.put('/edit/:id', postController.editPost)


module.exports = Router