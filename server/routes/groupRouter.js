const Router = require('express')
const router = new Router()
const groupRouter = require('../controllers/groupController')

router.post('/create', groupRouter.create)
router.get('/getAll', groupRouter.getAll)

module.exports = router