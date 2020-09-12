const debug = require('debug')('app:controllers:config')
const { getConfig, setConfig } = require('../utils')
const { validateConfig } = require('../validation')

module.exports.index = (req, res) => {
  const config = getConfig()
  debug('index', JSON.stringify(config, null, 2))
  res.json(config)
}

module.exports.save = (req, res) => {
  debug('save', req.body)
  const checkConfig = validateConfig(req.body)
  if (checkConfig !== true && validateConfig.errors !== null) {
    res.json({
      message: 'Invalid config format',
      errors: [
        {
          body: req.body,
          errors: validateConfig.errors,
        },
      ],
    })
    return
  }
  setConfig(req.body)
  const config = getConfig()
  res.json(config)
}
