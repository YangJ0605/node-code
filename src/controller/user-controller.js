const {create} = require('../service/user-server')

class UserController {
  async register(ctx, next) {
    const user = ctx.request.body
    const res = await create(user)
    if(res[0].insertId) ctx.body = {msg: '注册成功~'}
  }
}

module.exports = new UserController()