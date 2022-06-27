const Router = require('express')
const router = new Router()
const postRouter = require('../controllers/postController')

router.post('/create', postRouter.create)
router.get('/getAll', postRouter.getAll)

module.exports = router