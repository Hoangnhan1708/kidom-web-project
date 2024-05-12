const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/ProductController.js')

router.use('/show-category', productController.showCategory)
router.use('/show-brand', productController.showBrand)
router.use('/', productController.index)

module.exports = router;