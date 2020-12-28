const mysql = require('mysql2')

const {MYSQL_DATABASE, MYSQL_HOST, MYSQL_PORT, MYSQL_PASSWD, MYSQL_USER} = require('../app/config')

const connections = mysql.createPool({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  database:MYSQL_DATABASE,
  user: MYSQL_USER,
  password: MYSQL_PASSWD
})

connections.getConnection((err, connection) => {
  connection.connect(err => {
    if(err) {
      console.log('数据库链接失败', err)
    } else {
      console.log('数据库链接成功~~')
    }
  })
})

module.exports = connections.promise()