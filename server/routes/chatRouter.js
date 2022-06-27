const Router = require('express')
const router = new Router()
const chatRouter = require('../controllers/chatController')

router.post('/create', chatRouter.create)
router.get('/getOne', chatRouter.getOne)

module.exports = router