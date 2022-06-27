const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const groupRouter = require('./groupRouter')
const messageRouter = require('./messageRouter')
const postRouter = require('./postRouter')
const chatRouter = require('./chatRouter')


router.use('/user', userRouter)
router.use('/chat', chatRouter)
router.use('/message', messageRouter)
router.use('/post', postRouter)
router.use('/group', groupRouter)

module.exports = router