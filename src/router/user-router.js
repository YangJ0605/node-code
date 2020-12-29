const Router = require('koa-router')
const {register} = require('../controller/user-controller')
const {verifyUser} = require('../middleware/user-middleware')
const handlePassword = require('../middleware/handle-password')
const userRouter = new Router({prefix: '/user'})


userRouter.post('/register', verifyUser, handlePassword, register)
userRouter.post('/login', )

module.exports = userRouter