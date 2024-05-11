const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/HomeController.js')

router.use('/new-products', homeController.newProducts)
router.use('/sale-products', homeController.saleProducts)

module.exports = router;