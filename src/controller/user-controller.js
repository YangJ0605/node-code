const {create} = require('../service/user-server')

class UserController {
  async register(ctx, next) {
    const user = ctx.request.body
    const res = await create(user)
    ctx.body = res
  }
}

module.exports = new UserController()