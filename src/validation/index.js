const Ajv = require('ajv')

const configSchema = require('./schemes/config')

const ajv = new Ajv({
  // allErrors: true,
  // verbose: true
})

module.exports.validateConfig = ajv.compile(configSchema)
