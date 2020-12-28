const app = require('./app')
const {APP_PORT} = require('./app/config')


app.listen(APP_PORT, () => {
  console.log(`server run at http://localhost:${APP_PORT}`)
})