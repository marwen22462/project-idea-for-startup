const express = require('express')

const postController = require('../controllers/post.Controller')
const Router = express.Router()

Router.get('/profile/:id/posts', postController.getPosts)
Router.get('/profile/:userId/post/:postId',postController.getOnePost)
Router.post('/profile/:id/add', postController.addPost)
Router.delete('/profile/:userId/post/:postId', postController.deletePost)
Router.put('/edit/:userId/:postId', postController.editPost)
Router.get('/homeUser', postController.getPostsByType)


module.exports = Router