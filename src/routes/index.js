const express = require('express')
const router = express.Router()

const feeRouter = require('./fee')

router.use('/fee', feeRouter)

module.exports = router