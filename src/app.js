const express = require('express')
const app = express()
const basicAuth = require('express-basic-auth')

const routes = require('./routes')

if (process.env.AUTH_LOGIN && process.env.AUTH_PASSWORD) {
  app.use(basicAuth({
    users: {
      [process.env.AUTH_LOGIN]: process.env.AUTH_PASSWORD
    }
  }))
}

app.use('/api', routes)

module.exports = app
