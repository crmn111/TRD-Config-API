const express = require('express')
const app = express()
const basicAuth = require('express-basic-auth')
const helmet = require('helmet')
const bodyParser = require('body-parser')

const routes = require('./routes')

app.use(helmet())
app.use(bodyParser.json())

if (process.env.AUTH_LOGIN && process.env.AUTH_PASSWORD) {
  app.use(basicAuth({
    users: {
      [process.env.AUTH_LOGIN]: process.env.AUTH_PASSWORD
    }
  }))
}

app.use('/api', routes)

module.exports = app
