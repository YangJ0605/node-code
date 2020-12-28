const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  APP_PORT: process.env.APP_PORT,
  MYSQL_PORT: process.env.MYSQL_PORT,
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWD: process.env.MYSQL_PASSWD
}