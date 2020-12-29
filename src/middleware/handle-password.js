const md5Password = require('../uitls/md5-password')

const handlePassword = async (ctx, next) => {
  let {password} = ctx.request.body
  ctx.request.body.password = md5Password(password)
  await next()
} 

module.exports = handlePassword