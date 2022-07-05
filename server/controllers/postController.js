const { Post } = require('../models/models')
const ApiError = require('../error/ApiError')

class PostController {
    async create(req, res, next) {
        const { title } = req.body
        const post = await Post.create({ title })
        return res.json(post)
    }

    async getAll(req, res) {
        const posts = await Post.findAll()
        return res.json(posts)
    }
}

module.exports = new PostController()