const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
require('../app/database')
const userRouter = require('../router/user-router')
const errorHandler = require('./error-hanlder')
const app = new Koa()

app.use(bodyParser())

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.on('error', errorHandler)

module.exports = app