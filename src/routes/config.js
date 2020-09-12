const express = require('express')
const router = express.Router()

const controller = require('../controllers/config')

router.get('/', controller.index)
router.post('/', controller.save)

module.exports = router
