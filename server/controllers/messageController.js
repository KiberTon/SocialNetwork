const { Message } = require('../models/models')
const ApiError = require('../error/ApiError')

class MessageController {
    async create(req, res) {
        const { text } = req.body
        const message = await Message.create({ text })
        return res.json(message)
    }

    async getAll(req, res) {
        const messages = await Message.findAll()
        return res.json(messages)
    }
}

module.exports = new MessageController()