const express = require('express')
const app = express()
const basicAuth = require('express-basic-auth')
const helmet = require('helmet')

const routes = require('./routes')

app.use(helmet())

if (process.env.AUTH_LOGIN && process.env.AUTH_PASSWORD) {
  app.use(basicAuth({
    users: {
      [process.env.AUTH_LOGIN]: process.env.AUTH_PASSWORD
    }
  }))
}

app.use('/api', routes)

module.exports = app
