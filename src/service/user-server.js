const connection = require('../app/database')

class UserService {
  async create(user) {
    const {username, password} = user
    const statement = `INSERT INTO user (name, password) VALUES (?, ?);`
    const res = await connection.execute(statement, [username, password])
    return res
  }
  async getUserByName(name) {
    const statement = `SELECT * FROM user WHERE name = ?;`
    const [res] = await connection.execute(statement, [name])
    return res
  }
}

module.exports = new UserService()