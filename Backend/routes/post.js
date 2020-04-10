const express = require('express')

const postController = require('../controllers/post.Controller')
const Router = express.Router()

Router.get('/profile/:id/posts', postController.getPosts)
Router.post('/profile/:id/add', postController.addPost)
Router.delete('/delete/:id', postController.deletePost)
Router.put('/edit/:id', postController.editPost)

module.exports = Router