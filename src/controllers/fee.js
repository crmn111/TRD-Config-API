const fs = require('fs')
const yaml = require('js-yaml')
const debug = require('debug')('app:controllers:fee')

const TYPE_FOUNDER = 'founder'
const TYPE_OWNER = 'owner'
const TYPE_SPECIAL = 'special'
const TYPE_SUPPORTER = 'supporter'
const TYPE_DEFAULT = 'default'

const getConfig = () => {
  let doc
  try {
    doc = yaml.safeLoad(fs.readFileSync(process.env.CONFIG_PATH));
  } catch (e) {
    debug(e);
  }
  return doc
}

const prepareDocs = (doc) => {
  const founders = Object
    .keys(doc.founders_map)
    .map(key => ({
      address: key,
      type: TYPE_FOUNDER,
      baking_fee: doc.founders_map[key],
    }))

  const owners = Object
    .keys(doc.owners_map)
    .map(key => ({
      address: key,
      type: TYPE_OWNER,
      baking_fee: doc.owners_map[key],
    }))

  const specials = Object
    .keys(doc.specials_map)
    .map(key => ({
      address: key,
      type: TYPE_SPECIAL,
      service_fee: doc.specials_map[key],
    }))

  const supporters = Object
    .keys(doc.supporters_set)
    .map(key => ({
      address: key,
      type: TYPE_SUPPORTER,
      service_fee: 0,
    }))

  const all = [
    ...founders,
    ...owners,
    ...specials,
    ...supporters,
  ]
  return all
}

const findByAddress = (docs, address) => {
  return docs.filter(doc => doc.address === address)[0]
}

module.exports.index = (req, res) => {
  const docs = prepareDocs(getConfig())
  res.json(docs)
}

module.exports.getOne = (req, res) => {
  const config = getConfig()
  const docs = prepareDocs(config)
  let info = findByAddress(docs, req.params.address)
  if (!info) {
    info = {
      type: TYPE_DEFAULT,
      address: req.params.address,
      service_fee: config.service_fee
    }
  }
  res.json(info)
}
