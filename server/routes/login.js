const express = require('express');
const router = express.Router();

const LoginController = require('../app/controllers/LoginController.js');

router.get('/auth/me', LoginController.showMe);
router.get('/logout', LoginController.logout);
router.post('/auth', LoginController.auth);

module.exports = router;
