const express = require('express')
const router = express.Router()

const feeRouter = require('./fee')
const configRouter = require('./config')

router.use('/fee', feeRouter)
router.use('/config', configRouter)

module.exports = router