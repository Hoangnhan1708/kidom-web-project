const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/ProductController.js')

router.use('/', productController.index)

module.exports = router;