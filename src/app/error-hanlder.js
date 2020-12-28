const errConstants = require('../constants')

const errorHandler = (error, ctx) => {
  let status, msg

  switch (error.message) {
    case errConstants.USERNAME_OR_PASSWORD_IS_REQUIRED:
      status = 400
      msg = '用户名或者密码不能为空~'
      break
    case errConstants.USER_IS_ALREADY_EXIST:
      status = 409
      msg = '用户名已存在~'
      break
    default:
      status = 404
      msg = 'Not Found'
  }
  ctx.status = status
  ctx.body = {msg}
}

module.exports = errorHandler