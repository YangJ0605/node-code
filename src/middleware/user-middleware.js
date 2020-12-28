const errConstants = require('../constants')
const {getUserByName} = require('../service/user-server')
const verifyUser = async (ctx, next) => {
  const {username, password} = ctx.request.body
  if(!username || !password) {
    const error = new Error(errConstants.USERNAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }
  const res = await getUserByName(username)
  if (res.length) {
    const error = new Error(errConstants.USER_IS_ALREADY_EXIST)
    return ctx.app.emit('error', error, ctx)
  }
  await next()
}

module.exports = {
  verifyUser
}