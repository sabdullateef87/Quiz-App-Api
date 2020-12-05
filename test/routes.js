const express = require('express')

var router = express.Router()
var controller = require('./controller')
var validators = require('./validators')


router.post('/', validators.create, controller.create)
router.get('/', controller.list)

module.exports = router