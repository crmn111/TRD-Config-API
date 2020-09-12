const fs = require('fs')
const yaml = require('js-yaml')
const debug = require('debug')('app:utils')

const getConfig = () => {
  let doc
  try {
    doc = yaml.safeLoad(fs.readFileSync(process.env.CONFIG_PATH));
  } catch (e) {
    debug(e);
  }
  return doc
}
module.exports.getConfig = getConfig

const setConfig = (json) => {
  let doc
  try {
    doc = yaml.safeDump(json);
    fs.writeFileSync(process.env.CONFIG_PATH, doc)
  } catch (e) {
    debug(e);
  }
  return doc
}
module.exports.setConfig = setConfig
