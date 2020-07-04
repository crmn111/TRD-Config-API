const express = require('express')
const router = express.Router()

const feeController = require('../controllers/fee')

router.get('/', feeController.index)
router.get('/:address', feeController.getOne)

module.exports = router
