const express = require('express')
const ctrl = require('../controllers/ctrl')
const auth = require('../middleware/auth')
const router = express.Router()
//////

router.post('/signin', ctrl.signin)
router.post('/score', ctrl.score)
router.get('/getstat', ctrl.getStat)

module.exports = router