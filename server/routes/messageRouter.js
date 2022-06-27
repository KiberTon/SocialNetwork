const Router = require('express')
const router = new Router()
const messageRouter = require('../controllers/messageController')

router.post('/create', messageRouter.create)
router.get('/getAll', messageRouter.getAll)

module.exports = router