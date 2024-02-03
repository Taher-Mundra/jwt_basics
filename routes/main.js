const express = require('express')
const router = express.Router();
const authMiddleware = require('../middleware/auth.js')
const {login,dashboard} = require('../controllers/main.js')

router.route('/login').post(login)
router.route('/dashboard').get(authMiddleware,dashboard)

module.exports = router;